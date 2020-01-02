var tipuesearch = {"pages": [{'title': 'Member', 'text': '第 1 組成員: 40523120 倉儲 \xa0 | \xa0 40523120 網站 40723102 倉儲 \xa0 | \xa0 40723102 網站 40723110 倉儲 \xa0 | \xa0 40723110 網站 40723112 倉儲 \xa0 | \xa0 40723112 網站 40723115 倉儲 \xa0 | \xa0 40723115 網站 40723120 倉儲 \xa0 | \xa0 40723120 網站 40723127 倉儲 \xa0 | \xa0 40723127 網站 40723136 倉儲 \xa0 | \xa0 40723136 網站 40723140 倉儲 \xa0 | \xa0 40723140 網站 40723143 倉儲 \xa0 | \xa0 40723143 網站 40723146 倉儲 \xa0 | \xa0 40723146 網站 40723148 倉儲 \xa0 | \xa0 40723148 網站 \n', 'tags': '', 'url': 'Member.html'}, {'title': 'Task', 'text': '', 'tags': '', 'url': 'Task.html'}, {'title': '利用 cmsimde 建立靜態網誌方法', 'text': '1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n \xa0 \xa0 \xa0以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n \xa0 \xa0 \xa0建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n \xa0 \xa0 \xa0 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容 \xa0 \xa0 \xa0 \xa0 推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n \xa0 \xa0 \xa0 git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': '利用 cmsimde 建立靜態網誌方法.html'}, {'title': 'Solvespace 編譯', 'text': '編譯步驟: \n 先將 Y:\\portablegit\\bin\\sh.exe 改名為 sh_rename_for_solvespace.exe (透過 MSYS2 執行 shell 指令, 而非 portablegit 中的 sh.exe) \n git version 查驗 git 版本 \n git 2.13 版本以上, 可以使用下列 git clone \xa0 --recurse-submodules 取得所有子模組資料 \n git clone --recurse-submodules https://github.com/solvespace/solvespace.git solvespace \n 上述指令同: \n git clone\xa0 https://github.com/solvespace/solvespace.git \xa0 \n cd solvespace \n git submodule init \n git submodule update \n edit Y:\\tmp\\solvespace\\extlib\\angle\\CMakeLists.txt comment out line 713 and 714 \n #list(APPEND ANGLE_DEFINITIONS #"-DANGLE_PRELOADED_D3DCOMPILER_MODULE_NAMES={ \\"d3dcompiler_47.dll\\", \\"d3dcompiler_46.dll\\", \\"d3dcompiler_43.dll\\" }") endif() \n 接著需要手動進行 libpng.dll.a 的編譯, 並改名為 libpng_static.a, 並放到編譯系統的 lib 目錄中 (即隨身系統的 msys64\\mingw64\\lib 目錄): \n cd solvespace \n cd extlib \n cd libpng \n mkdir build \n cd build \n cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release mingw32-make \n (mingw32-make -Wl,-static) \n rename libpng.dll.a to libpng_static.a and copy to Y:\\msys64\\mingw64\\lib \n 接著回到 solvespace 原始碼目錄, 建立 build 目錄後進入 build 目錄, 執行: \n cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release mingw32-make \n 編譯完成後, 可以在 build\\bin 目錄中建立 solvespace.exe, 配合相關 dll 檔案後, 即可執行. \n', 'tags': '', 'url': 'Solvespace 編譯.html'}, {'title': 'About 更改', 'text': '在 Help->About 視窗中, 納入 "This Solvespace is compiled by 學號" \n', 'tags': '', 'url': 'About 更改.html'}, {'title': 'Blog', 'text': '--------課程筆記----------- \n cad2019/config/pelican.leo \n 1.將老師倉儲的 pelican.leo裡的@edit base.html所有內容覆蓋自己的 \n 2.Pelican設定 \n \xa0 \xa0 \xa0 共用 @edit pelocanconf.py\xa0 將名稱改為自己的 \n \xa0 \xa0 \xa0\xa0 遠端 @edit pelocanconf.py SITEUR="網站" \n blog的網址是依照 @path markdown (@edit 20191031-1.md)來決定 \n local.blog > go script \n', 'tags': '', 'url': 'Blog.html'}, {'title': 'Solvespace 操作', 'text': '', 'tags': '', 'url': 'Solvespace 操作.html'}, {'title': '1 - 1', 'text': '', 'tags': '', 'url': '1 - 1.html'}, {'title': 'V-REP 操作', 'text': '學習如何完成\xa0 https://github.com/solvespace/solvespace \xa0原始碼的編譯, 並透過\xa0 http://solvespace.com \xa0學習如何建立 \xa0 web_rep2.zip \xa0中所需的行走車 \n 建立的零組件轉入\xa0V-rep 3.6.1 rev 4.7z 後, 以網際 V-rep 模型控制進行控制. \n ------------------------------------------------------------------------------------------- \n 將 D:\\.....V-REP3\\V-REP_PRO_EDU\\programming\\remoteApiBindings\\lib \n \xa0 \xa0 \xa0 \xa0\\lib\\Windows\\64Bit裡的remoteApi.dll \n 覆蓋 web_vrep2\\web_vrep2裡的 remoteApi.dll \n', 'tags': '', 'url': 'V-REP 操作.html'}, {'title': '1 - 1 Two - Wheeler', 'text': '', 'tags': '', 'url': '1 - 1 Two - Wheeler.html'}, {'title': '組員工作分配', 'text': '1 . 以分組協同方式整理教科書內容 \n 2 .\xa0 處理 content.htm, reveal 簡報以及 pelican 網誌 markdown 中的改版衝突 \n 3 . NX及SolveSpace 繪圖\xa0 \n 4 . V-rep 與 Webots Tutorial, 分別利用 Solvespace 與 NX 建立零組件轉入 \n \n', 'tags': '', 'url': '組員工作分配.html'}, {'title': '繪圖', 'text': '以下是課程中所列重點 \n 1 . 兩人分別用 Solvespace\xa0 \xa0和\xa0 NX 建立零組件，錄製繪圖過程並建構出零組件後與V-REP、Webots組做 結合。 \n 2 .\xa0 NX繪圖者匯出零件後分析零件應力分析，再和Webots的應力分析做比較，得出差異性。 \n ---------------------------------------------------------- \n 課程筆記 \n 將練習影片加上說明字幕, 以校名+系名+課程名稱+分組任務名稱+學號作為標題, 上傳 Youtube 後, 分別嵌入個人與分組網頁中. \n', 'tags': '', 'url': '繪圖.html'}, {'title': 'NX繪圖', 'text': '\n \n --------------------------------------------------------------------------------------- \n \n \n --------------------------------------------------------------------------------------- \n \n \n --------------------------------------------------------------------------------------- \n \n \n --------------------------------------------------------------------------------------- \n \n \n --------------------------------------------------------------------------------------- \n \n \n --------------------------------------------------------------------------------------- \n \n \n --------------------------------------------------------------------------------------- \n \n \n --------------------------------------------------------------------------------------- \n \n \n --------------------------------------------------------------------------------------- \n \n \n \n', 'tags': '', 'url': 'NX繪圖.html'}, {'title': 'SloveSpace繪圖', 'text': '繪製及組合自走車練習 \n ---------------------------------------------------------------------------------- \n 輪子 \n \n ---------------------------------------------------------------------------------- \n 連接桿1 \n \n ---------------------------------------------------------------------------------- \n 連接桿2 \n \n ---------------------------------------------------------------------------------- \n 連接桿3 \n \n ---------------------------------------------------------------------------------- \n 連接桿4 \n \n ---------------------------------------------------------------------------------- \n 自走車側板 \n \n ---------------------------------------------------------------------------------- \n 自走車前後板 \n \n ---------------------------------------------------------------------------------- \n 側板連接件 \n \n ---------------------------------------------------------------------------------- \n 組合第一部分 \n \n ---------------------------------------------------------------------------------- \n 組合第二部分 \n \n ---------------------------------------------------------------------------------- \n 組合第三部分 \n \n ---------------------------------------------------------------------------------- \n 組合第四部分 \n \n ---------------------------------------------------------------------------------- \n 組合展示 \n \n', 'tags': '', 'url': 'SloveSpace繪圖.html'}, {'title': '教科書', 'text': '', 'tags': '', 'url': '教科書.html'}, {'title': 'NX應力分析', 'text': '', 'tags': '', 'url': 'NX應力分析.html'}, {'title': '第八章', 'text': '第八章 有限元素分析 \n 有限元素分析（ FEA ）是有限元素方法（ FEM ）的實際運用，他用於對結構或流體所施加的因素 ( 例如力、壓力、熱量和振動 ) 來做出反應行為。 \n 通常，開始的過程都會先從創建幾何模型開始，之後再將模型細分(網狀化)成許多在特定的節點上連結在一起的簡單幾何形狀的小塊(元素)，而材料的性質和限制條件也會應用在元素上。 \n 在最後，許多軟體像是NX12都能解決有限元素分析（ FEA ）的問題並將結果輸出且可視化。有限元素分析（ FEA ）能夠幫助工程師在製造和測試前，更加了解產品的性能。 \n 有限元素分析（ FEA ）的應用包括結構分析、熱分析、流體力學和電磁兼容性 \n 其中，有限元素分析（ FEA ）最常用於結構和固體力學，並應用於計算機械性能（例如應力和位移）。這些（應力和位移）的計算對機械部件的性能非常重要，甚至能夠預防故障。 \n 本章中，我們將處理實體零件的結構應力和應變分析。 \n', 'tags': '', 'url': '第八章.html'}, {'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作.', 'tags': '', 'url': 'About.html'}]};