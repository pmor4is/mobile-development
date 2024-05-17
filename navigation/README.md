# Mobile development
<div align='center'>

</div>

## Criando um projeto
Para criar e iniciar um projeto através do emulador, seguir as linhas abaixo no terminal
No momento em que foi criado o aplicativo, saiu a versão 0.74 do React Native, com uma nova arquitetura. Porém os componentes ainda não absorveram essa arquitetura, então o projeto deve ser criado na versão 0.72.
~~~bash
npx react-native@0.72 init <nome_do_projeto> --version 0.72
cd <diretorio_do_projeto>
npm install
npm start
~~~
Para verificar quais emuladores estão disponíveis e inicializar:
~~~bash
# Androids
emulator -list-avds
emulator -avd <nome_do_emulador>
# Lista qualquer dispositivo para deploy
adb devices
~~~

As bibliotecas instaladas foram as de navegação do React Native. Podem ser instaladas com o comando abaixo:
~~~bash
npm install @react-navigation/native @react-navigation/native-stack
npm install react-native-screens react-native-safe-area-context
npm install @react-navigation/bottom-tabs
npm install --save react-native-vector-icons
~~~

Para utilizar os icones do react-native-vector-icons, é necessário adicionar a seguinte linha de comando no arquivo em /android/app/build.gradle
~~~
~~~