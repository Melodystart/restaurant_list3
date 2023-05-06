1. 功能描述 (features)：   

  使用者可以選擇排序餐廳的方式
  使用者可以輸入關鍵字/分類搜尋餐廳
  使用者可以新增一家餐廳  
  使用者可以瀏覽一家餐廳的詳細資訊  
  使用者可以瀏覽全部所有餐廳  
  使用者可以修改一家餐廳的資訊  
  使用者可以刪除一家餐廳     
  使用者可以註冊帳號，註冊的資料包括：名字、email、密碼、確認密碼     

2. 安裝與執行步驟 (installation and execution)：   

． 將本專案clone至本機位置   
  git clone https://github.com/Melodystart/restaurant_list3.git  

． cd進入至專案資料夾restaurant_list3，並執行以下安裝套件及執行程式指令   
  npm install     
  npm i express    
  npm install -g nodemon    
  npm i express-handlebars    
  npm install dotenv --save    
  npm install method-override      
  npm i -g express-generator     
  npm install --save handlebars-helpers       
  npm install bcryptjs      
  npm install express-session       
  npm install passport         
  npm install passport-facebook    
  npm install passport-local       
  npm install connect-flash     

． 請自行新增.env檔案並將以下資訊儲存於檔案中    
  MONGODB_URI= "您的MongoDB連線資訊"

． 載入種子資料(執行程式指令)  
  npm run seed

． 啟動伺服器  (執行程式指令)  
  nodemon app.js

3. 環境建置與需求 (prerequisites)：   

  bootstrap: ^5.2.3,   
  express: ^4.18.2,   
  express-handlebars: ^6.0.7   
  mongoose: ^7.0.0  
  dotenv: ^16.0.3  
  method-override: ^3.0.0     
  handlebars-helpers: "^0.10.0"            
  bcryptjs: "^2.4.3"      
  connect-flash: "^0.1.1"      
  express-session: "^1.17.3"      
  passport": "^0.6.0"      
  passport-facebook: "^3.0.0"      
  passport-local: "^1.0.0"      