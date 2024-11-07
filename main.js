const { app, BrowserWindow, ipcMain } = require('electron');
const puppeteer = require('puppeteer');

let mainWindow;
let browser;
let interval;

async function createWindow() {
  mainWindow = new BrowserWindow({
    width: 300,
    height: 200,
    webPreferences: {
      preload: `${__dirname}/preload.js`,
      contextIsolation: true, // Habilita a segurança para comunicação
      nodeIntegration: false, // Desativa integração direta com o Node.js
    },
  });

  mainWindow.loadFile('index.html');
  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  // Cria uma nova instância do navegador Chromium com Puppeteer
  browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://gitpod.io/login');

  ipcMain.on('toggle-refresh', () => {
    if (interval) {
      stopRefreshingPage();
      mainWindow.webContents.send('status', 'Parado');
    } else {
      startRefreshingPage(page);
      mainWindow.webContents.send('status', 'Reiniciando a cada 5 minutos');
    }
  });
}

// Função para iniciar o recarregamento da página
function startRefreshingPage(page) {
  interval = setInterval(async () => {
    await page.reload();
  }, 60000); // 5 minutos
}

// Função para parar o recarregamento
function stopRefreshingPage() {
  clearInterval(interval);
  interval = null;
}

// Inicializa o Electron e cria a janela
app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});