var tipuesearch = {"pages": [{'title': 'Member', 'text': '第 1 組成員: 40523120 倉儲 \xa0 | \xa0 40523120 網站 40723102 倉儲 \xa0 | \xa0 40723102 網站 40723110 倉儲 \xa0 | \xa0 40723110 網站 40723112 倉儲 \xa0 | \xa0 40723112 網站 40723115 倉儲 \xa0 | \xa0 40723115 網站 40723120 倉儲 \xa0 | \xa0 40723120 網站 40723127 倉儲 \xa0 | \xa0 40723127 網站 40723136 倉儲 \xa0 | \xa0 40723136 網站 40723140 倉儲 \xa0 | \xa0 40723140 網站 40723143 倉儲 \xa0 | \xa0 40723143 網站 40723146 倉儲 \xa0 | \xa0 40723146 網站 40723148 倉儲 \xa0 | \xa0 40723148 網站 \n', 'tags': '', 'url': 'Member.html'}, {'title': 'Task', 'text': '', 'tags': '', 'url': 'Task.html'}, {'title': '利用 cmsimde 建立靜態網誌方法', 'text': '1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n \xa0 \xa0 \xa0以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n \xa0 \xa0 \xa0建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n \xa0 \xa0 \xa0 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容 \xa0 \xa0 \xa0 \xa0 推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n \xa0 \xa0 \xa0 git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': '利用 cmsimde 建立靜態網誌方法.html'}, {'title': 'Solvespace 編譯', 'text': '編譯步驟: \n 先將 Y:\\portablegit\\bin\\sh.exe 改名為 sh_rename_for_solvespace.exe (透過 MSYS2 執行 shell 指令, 而非 portablegit 中的 sh.exe) \n git version 查驗 git 版本 \n git 2.13 版本以上, 可以使用下列 git clone \xa0 --recurse-submodules 取得所有子模組資料 \n git clone --recurse-submodules https://github.com/solvespace/solvespace.git solvespace \n 上述指令同: \n git clone\xa0 https://github.com/solvespace/solvespace.git \xa0 \n cd solvespace \n git submodule init \n git submodule update \n edit Y:\\tmp\\solvespace\\extlib\\angle\\CMakeLists.txt comment out line 713 and 714 \n #list(APPEND ANGLE_DEFINITIONS #"-DANGLE_PRELOADED_D3DCOMPILER_MODULE_NAMES={ \\"d3dcompiler_47.dll\\", \\"d3dcompiler_46.dll\\", \\"d3dcompiler_43.dll\\" }") endif() \n 接著需要手動進行 libpng.dll.a 的編譯, 並改名為 libpng_static.a, 並放到編譯系統的 lib 目錄中 (即隨身系統的 msys64\\mingw64\\lib 目錄): \n cd solvespace \n cd extlib \n cd libpng \n mkdir build \n cd build \n cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release mingw32-make \n (mingw32-make -Wl,-static) \n rename libpng.dll.a to libpng_static.a and copy to Y:\\msys64\\mingw64\\lib \n 接著回到 solvespace 原始碼目錄, 建立 build 目錄後進入 build 目錄, 執行: \n cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release mingw32-make \n 編譯完成後, 可以在 build\\bin 目錄中建立 solvespace.exe, 配合相關 dll 檔案後, 即可執行. \n', 'tags': '', 'url': 'Solvespace 編譯.html'}, {'title': 'About 更改', 'text': '在 Help->About 視窗中, 納入 "This Solvespace is compiled by 學號" \n', 'tags': '', 'url': 'About 更改.html'}, {'title': 'Blog', 'text': '--------課程筆記----------- \n cad2019/config/pelican.leo \n 1.將老師倉儲的 pelican.leo裡的@edit base.html所有內容覆蓋自己的 \n 2.Pelican設定 \n \xa0 \xa0 \xa0 共用 @edit pelocanconf.py\xa0 將名稱改為自己的 \n \xa0 \xa0 \xa0\xa0 遠端 @edit pelocanconf.py SITEUR="網站" \n blog的網址是依照 @path markdown (@edit 20191031-1.md)來決定 \n local.blog > go script \n', 'tags': '', 'url': 'Blog.html'}, {'title': 'Solvespace 操作', 'text': '', 'tags': '', 'url': 'Solvespace 操作.html'}, {'title': '1 - 1', 'text': '', 'tags': '', 'url': '1 - 1.html'}, {'title': 'V-REP 操作', 'text': '學習如何完成\xa0 https://github.com/solvespace/solvespace \xa0原始碼的編譯, 並透過\xa0 http://solvespace.com \xa0學習如何建立 \xa0 web_rep2.zip \xa0中所需的行走車 \n 建立的零組件轉入\xa0V-rep 3.6.1 rev 4.7z 後, 以網際 V-rep 模型控制進行控制. \n ------------------------------------------------------------------------------------------- \n 將 D:\\.....V-REP3\\V-REP_PRO_EDU\\programming\\remoteApiBindings\\lib \n \xa0 \xa0 \xa0 \xa0\\lib\\Windows\\64Bit裡的remoteApi.dll \n 覆蓋 web_vrep2\\web_vrep2裡的 remoteApi.dll \n', 'tags': '', 'url': 'V-REP 操作.html'}, {'title': '1 - 1 Two - Wheeler', 'text': '', 'tags': '', 'url': '1 - 1 Two - Wheeler.html'}, {'title': '組員工作分配', 'text': '1 . 以分組協同方式整理教科書內容 \n 2 .\xa0 處理 content.htm, reveal 簡報以及 pelican 網誌 markdown 中的改版衝突 \n 3 . NX及SolveSpace 繪圖\xa0 \n 4 . V-rep 與 Webots Tutorial, 分別利用 Solvespace 與 NX 建立零組件轉入 \n \n', 'tags': '', 'url': '組員工作分配.html'}, {'title': '繪圖', 'text': '以下是課程中所列重點 \n 1 . 兩人分別用 Solvespace\xa0 \xa0和\xa0 NX 建立零組件，錄製繪圖過程並建構出零組件後與V-REP、Webots組做 結合。 \n 2 .\xa0 NX繪圖者匯出零件後分析零件應力分析，再和Webots的應力分析做比較，得出差異性。 \n ---------------------------------------------------------- \n 課程筆記 \n 將練習影片加上說明字幕, 以校名+系名+課程名稱+分組任務名稱+學號作為標題, 上傳 Youtube 後, 分別嵌入個人與分組網頁中. \n', 'tags': '', 'url': '繪圖.html'}, {'title': 'NX繪圖', 'text': '\n \n --------------------------------------------------------------------------------------- \n \n \n --------------------------------------------------------------------------------------- \n \n \n --------------------------------------------------------------------------------------- \n \n \n --------------------------------------------------------------------------------------- \n \n \n --------------------------------------------------------------------------------------- \n \n \n --------------------------------------------------------------------------------------- \n \n \n --------------------------------------------------------------------------------------- \n \n \n --------------------------------------------------------------------------------------- \n \n \n --------------------------------------------------------------------------------------- \n \n \n \n', 'tags': '', 'url': 'NX繪圖.html'}, {'title': 'SloveSpace繪圖', 'text': '繪製及組合自走車練習 \n ---------------------------------------------------------------------------------- \n 輪子 \n \n ---------------------------------------------------------------------------------- \n 連接桿1 \n \n ---------------------------------------------------------------------------------- \n 連接桿2 \n \n ---------------------------------------------------------------------------------- \n 連接桿3 \n \n ---------------------------------------------------------------------------------- \n 連接桿4 \n \n ---------------------------------------------------------------------------------- \n 自走車側板 \n \n ---------------------------------------------------------------------------------- \n 自走車前後板 \n \n ---------------------------------------------------------------------------------- \n 側板連接件 \n \n ---------------------------------------------------------------------------------- \n 組合第一部分 \n \n ---------------------------------------------------------------------------------- \n 組合第二部分 \n \n ---------------------------------------------------------------------------------- \n 組合第三部分 \n \n ---------------------------------------------------------------------------------- \n 組合第四部分 \n \n ---------------------------------------------------------------------------------- \n 組合展示 \n \n', 'tags': '', 'url': 'SloveSpace繪圖.html'}, {'title': 'Onshape繪圖', 'text': '\n \n --------------------------------------------------------------------------------------- \n \n \n --------------------------------------------------------------------------------------- \n \n \n --------------------------------------------------------------------------------------- \n \n \n --------------------------------------------------------------------------------------- \n \n \n --------------------------------------------------------------------------------------- \n \n \n', 'tags': '', 'url': 'Onshape繪圖.html'}, {'title': '繪圖軟體差異性', 'text': "我們這次使用了四種不同的繪圖軟體來繪製，而下列會寫出使用的心得並 \n 分別提出他們的優點及缺點，有些繪圖軟體有其他功能， \n 但我們幾乎都只使用''繪圖、繪製零件''的功能，所以在此只比較他們的繪製差異性。 \n ------------------------------------------------------------------------------------------------------ \n Inventor2019: \xa0 繪製過程沒什麼太大問題，繪製完線條之後才進行標註約束，讓他成為我們指定的形狀及尺寸之後再去做擠出成型的動作。 \n NX12 :\xa0 不知道是不是工作環境的問題，繪製過程常常卡頓，和其他的繪圖難體多花了一些時間，繪製線條完之後都會先以基準線XYZ去做標註的動作，。 \n SolveSpace :\xa0 跑起來最為流暢，可惜功能不多，標註、繪製的限制較多(線與線的標註、平面的選定)。 \n Onshape : \xa0 需要註冊，繪製起來最順手，介面功能清楚，隨時雲端存檔，可以直接讓別人觀看你所繪製的零組件。 \n ------------------------------------------------------------------------------------------------------ \n \n \n \n \n 繪圖時間(難易度) \n 功能性 \n 特色 \n \n \n Inventor2019 \n 一般(中等) \n \n 繪圖、模擬、組合 \n \n 3D部分(組合、模擬)較強 \n \n \n NX12 \n 較久(難) \n \n 繪圖、模擬、組合、後處理 \n \n 整合設計、模擬與製造 \n \n \n SolveSpace \n 一般(中上) \n 繪圖、組合 \n \n 檔案大小 小 \n \n \n \n \n Onshape \n \n 快(簡單) \n 繪圖、組合 \n \n 不須安裝 \n 檔案隨時存檔在雲端 \n \n \n \n", 'tags': '', 'url': '繪圖軟體差異性.html'}, {'title': '教科書', 'text': '', 'tags': '', 'url': '教科書.html'}, {'title': 'NX應力分析', 'text': '第八章 \n 第八章 有限元素分析 \n 有限元素分析（ FEA ）是有限元素方法（ FEM ）的實際運用，他用於對結構或流體所施加的因素 ( 例如力、壓力、熱量和振動 ) 來做出反應行為。 \n 通常，開始的過程都會先從創建幾何模型開始，之後再將模型細分(網狀化)成許多在特定的節點上連結在一起的簡單幾何形狀的小塊(元素)，而材料的性質和限制條件也會應用在元素上。 \n 在最後，許多軟體像是NX12都能解決有限元素分析（ FEA ）的問題並將結果輸出且可視化。有限元素分析（ FEA ）能夠幫助工程師在製造和測試前，更加了解產品的性能。 \n 有限元素分析（ FEA ）的應用包括結構分析、熱分析、流體力學和電磁兼容性 \n 其中，有限元素分析（ FEA ）最常用於結構和固體力學，並應用於計算機械性能（例如應力和位移）。這些（應力和位移）的計算對機械部件的性能非常重要，甚至能夠預防故障。 \n 本章中，我們將處理實體零件的結構應力和應變分析。', 'tags': '', 'url': 'NX應力分析.html'}, {'title': 'WEEK17內容', 'text': '建立節點 \n 現在，我們將關注節點和馬達，大多數時候，我們知道每個關節的準確的位置和方向，在這種情況下，我們只需使用按下 [ 菜單欄 -> 添加 -> 關節 -> ...] 來添加關節，然後我們可以使用“位置”欄和“方向”欄更改其位置和方向。在其他情況下，我們只有 \xa0D-H 矩陣（即 D-H ）參數，在這種情況下，我們可以透過模型瀏覽器中位於 Models / tools / Denavit-Hartenberg joint creator.ttm 中的工具模型來構建關節， \n 但在其他的狀況下，我們不清楚關節位置和他的方向。所以，我們需要從導入的網格中提取它們。讓我們假設這是我們目前的情況。不用處理修改過的，更近似的網格，而是打開一個新情景，然後再次導入原始 CAD 數據。大多數時候，我們可以從最初的網格中提取網格或它的基本形狀，第一步是細分原始網格，如果不起作用，我們將經由三角形編輯模式來進行操作。讓我們假設我們現在可以細分原始的網格，我們現在可以觀察更小的物件，我們正在尋找迴轉形狀，它可以用作在其位置創建節點並以相同方向來參考。首先，刪除所有不需要的物件，有時在多個打開的場景中工作也很有幫助，它可以便於可視化和操作，在我們的案例中，我們首先注意機器人的底座：它包含一個圓柱體，該圓柱體的第一個節點的位置正確。在三角形編輯模式下，我們有： \n \n [Robot base: normal and triangle edit mode visualization] \n 我們通過頁面選擇器工具欄按鈕來更改攝影機的視角，為了從側面來查看物件。 fit-to-view 工具欄按鈕可以派上用場，可用來正確地框束物件的版本。然後，我們切換到 vertex edit 模式，並選擇屬於圓盤上的所有頂點。記住我們可以通過打開 / 關閉某些層，我們可以隱藏場景中的其他物件。然後，我們切換回三角形編輯模式： \n \n [Selected upper disc, vertex edit mode (1 & 2), triangle edit mode (3)] \n 現在，我們單擊“提取圓柱體”（在這種情況下，“提取形狀”也將起作用），這只是在場景中創建了圓柱體形狀，而這個場景是根據所選定的三角形我們離開編輯模式並放棄修改物件，現在我們新增一個旋轉節點， [ 菜單欄 -> 新增 -> 節點 -> 旋轉 ] ，然後讓它保持被選擇的狀態，並控制提取圓柱體的形狀在位置框的“位置”選項上，我們點擊“ Apply to selection ( 應用於選擇 ) ”，這基本上將圓柱體的 x / y / z 的位置複製到節點，現在兩者的位置都相同。在 [ 方向 ] 選項上，我們也點擊“ Apply to selection( 應用於選擇 ) ”：現在，我們選擇的物件方向也變成相同，有些時候，我們將需要圍繞其自身的參考範圍的旋轉節點增加約  90/180 度，以獲得正確的方向或旋轉方向，如果需要，我們可以在該對話框的 [ 旋轉 ] 選項上執行此操作（在這種情況下，請不要忘記點擊“ Own frame( 自有框架 ) 按鈕 \n \n [Joint in correct location, with the correct orientation] \n 現在我們將節點複製回原始場景並保存 ( 不要忘記定期存檔你的資料，復原 / 重做功能非常有用，但不能保護你免於其他災難的影響 ) \n 我們對機器人的所有節點都重複上面的過程，然後重新命名他們，我們還將所有節點和他們的屬性稍長一點，讓我們方便查看所有關節 \n 透過默認，將節點分配於可見圖層 2 ，但可以在物件的公共屬性中對其進行修改， \n 現在，我們將所有節點分配給可見圖層 10 ，然後為場景臨時啟用可見圖層 10 ，以使這些節點也可視化 \n （默認情況下，僅激活場景的可見圖層 1-8 ），這就是我們到目前為止的結果（模型 ResizableFloor_5_25 模型在模型屬性對話框中暫時不可見）： \n \n [Joints in correct configuration] \n 到這裡，我們可以開始建構模型層次的結構並完成它的定義，但是，如果我們想要可以動態啟用 OPUR 機器人，則還有一個額外的步驟', 'tags': '', 'url': 'WEEK17內容.html'}, {'title': '重點整理', 'text': "建立節點 Building the joints --------------------------------------------------------------- 知道每個關節的準確的位置和方向的情況 know the exact position and orientation of each of the joints   1.[菜單欄->添加->節點-> ...]來添加節點  add the joints with [Menu bar --> Add --> Joints --> ...] \n 2.可以使用“位置”欄和“方向”欄更改其位置和方向  we can change their position and orientation with the position dialog and orientation dialog.   3.透過模型瀏覽器中位於Models / tools / Denavit-Hartenberg joint creator.ttm中的工具模型來構建關節每個關節的準確的位置和方向  we can build our joints via the tool model located in Models/tools/Denavit-Hartenberg joint creator.ttm, in the model browser.   Othertimes, we have no information about the joint locations and orientations --------------------------------------------------------------- 不知道每個關節的準確的位置和方向的情況 we have no information about the joint locations and orientations \n 1.打開一個新情景，然後再次導入原始CAD數據  we open a new scene, and import the original CAD data again \n 2.細分原始網格，如果不起作用，我們將經由三角形編輯模式來進行操作。  The first step is to subdivide the original mesh  2-1.讓我們假設我們現在可以細分原始的網格  Let's suppose that we could divide the original mesh \n 3.刪除所有不需要的物件(只留下需要的零件 此段無翻譯)  remove all objects that are not needed  3-1.通過頁面選擇器工具欄按鈕來更改攝影機的視角  We change the camera view via the page selector toolbar button  3-2.為了從側面來查看物件。fit-to-view工具欄按鈕可以派上用場，可用來正確地框束物件的版本  The fit-to-view toolbar button can come in handy to correctly frame the object in edition  3-3.然後，我們切換到vertex edit模式，並選擇屬於圓盤上的所有頂點。記住我們可以通過打開/關閉某些層，我們可以隱藏場景中的其他物件。  Then we switch to the vertex edit mode and select all vertices that belong to the upper disc. Remember that by switching some layers on/off, \n 4.點擊“提取圓柱體”  we click Extract cylinder   4-1.我們離開編輯模式並放棄修改物件  We leave the edit mode and discard the changes  4-2.新增一個旋轉節點，[菜單欄->新增->節點->旋轉]，然後讓它保持被選擇的狀態，  we add a revolute joint with [Menu bar --> Add --> Joint --> Revolute], keep it selected  4-3.並控制提取圓柱體的形狀在位置框的[位置]選項上，我們點擊“Apply to selection (應用於選擇)”  In the position dialog, on the position tab, we click Apply to selection  4-4.在[方向]選項上，我們也點擊“Apply to selection(應用於選擇)”  In the orientation dialog, on the orientation tab, we also click Apply to selection:  P.S:有些時候，我們將需要圍繞其自身的參考範圍的旋轉節點增加約 90/180度，以獲得正確的方向或旋轉方向  Sometimes, we will need to additionally rotate the joint about 90/180 degrees around its own reference   frame in order to obtain the correct orientation or rotation direction \n 5. 在預設，節點分配於可見圖層2，但可以在物件的公共屬性中對其進行修改  By defaut, joints will be assigned to visibility layer 2,    5-1.將所有節點分配給可見圖層10，然後為場景臨時啟用可見圖層10（默認情況下，僅激活場景的可見圖層1-8）  We assign now all joints to visibility layer 10, then temporarily enable visibility layer 10 for the scene to also visualize those joints   (by default, only visibility layers 1-8 are activated for the scene). \n \n", 'tags': '', 'url': '重點整理.html'}, {'title': '期末影片', 'text': '', 'tags': '', 'url': '期末影片.html'}, {'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作.', 'tags': '', 'url': 'About.html'}]};