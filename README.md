Este projeto cria uma interface gráfica usando Electron e Puppeteer para controlar o navegador Chromium. A interface permite iniciar e parar o recarregamento automático de uma página a cada 1 minuto (ou outro intervalo configurável), útil para testes de atualização contínua ou monitoramento de páginas.

**Funcionalidades**

**Interface gráfica simples**:
Um botão que permite iniciar e parar o recarregamento automático de uma página no Chromium.
**Recarregamento automático**:
Controlado pelo Puppeteer, a página é recarregada em intervalos regulares (configurado para 1 minuto, mas personalizável).
Modo de execução em segundo plano: Chromium pode ser executado em modo "headless" (sem interface gráfica) se preferir manter o navegador oculto.
Tecnologias Utilizadas

**Como Executar o Projeto**
Clone o repositório e navegue até a pasta do projeto:
`git clone https://github.com/dksub15/Chromium-Auto-Reload-Control-with-Electron-and-Puppeteer.git`

`cd Chromium-Auto-Reload-Control-with-Electron-and-Puppeteer`
Instale as dependências do projeto:
`npm install`

Inicie o aplicativo:
`npx electron main.js`


**Arquivos Principais**
main.js: Controla a criação da janela Electron e o comportamento do navegador Chromium.
preload.js: Configura a comunicação entre o backend e o frontend do Electron.
index.html: Interface gráfica com o botão de controle.
style.css: Estilos para a interface gráfica.
package.json: Gerencia as dependências e configurações do projeto Node.js.
