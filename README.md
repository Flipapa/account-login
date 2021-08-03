# 登入模擬器
此專案是一個模擬的登入系統，測試帳號密碼的驗證程序。

## 功能
- 使用預先存入的帳號密碼登入後會顯示歡迎文字。
- 帳號或密碼錯誤會分別顯示不同提示。

## 環境
- Node.js v10.15.0
- express v4.17.1
- express-handlebars v5.3.2

### 安裝
1. 開啟終端機(Terminal)將此專案Clone至本機電腦
```
git clone https://github.com/Flipapa/account-login.git
```
2. 進入存放此專案的資料夾
```
cd account-login
```
3. 安裝 npm 套件
```
npm install
```
4. 啟動網頁伺服器
```
npm run dev
```
當 Terminal 出現以下文字表示成功連結本地伺服器
```
Express is listening on localhost:3000
```
5. 在任一瀏覽器中輸入 http://localhost:3000 開始使用本專案
6. 使用 ./models/seeds/users.json 檔案中的 email 及 password 登入測試