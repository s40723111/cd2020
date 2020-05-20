var tipuesearch = {"pages": [{'title': 'About', 'text': 'Repository ： https://github.com/s40723111/cd2020 \n Blog: https://s40723111.github.io/cd2020/blog \n Presentation： https://s40723111.github.io/cd2020/reveal/index.html#/ \n Group\xa0Repository： https://github.com/s40723138/cd2020ag4 \n Group Website： https://s40723138.github.io/cd2020ag4/content/index.html \n \n', 'tags': '', 'url': 'About.html'}, {'title': 'week', 'text': '', 'tags': '', 'url': 'week.html'}, {'title': 'w1', 'text': '創 cd2020的倉儲 \n 創 網站 \xa0 \n 步驟: \n \n 登入自己得 gihub \xa0建立新的 倉儲名字叫 cd2020 \n 接著執行git clone\xa0 https://github.com/s40723111/cd2020 \xa0(自己的網址) \n 執行git submodule add\xa0 https://github.com/mdecourse/cmsimde.git \xa0取得子模組資料 \n 將cmsimde>up_dir裡的所有項目全部複製到外面cd2020裡面 \n 之後cd cmsimde 輸入python -m pip install flask_cors更改模組 \n 接著就能執行python wsgi.py編輯靜態網站 \n \n', 'tags': '', 'url': 'w1.html'}, {'title': 'w2', 'text': '將python 3.7.3更新至3.8.2 \n 1. https://www.python.org/downloads/windows/ 在這個網站上下載 \n Windows x86-64 executable installer 安裝至自己可攜系統(把pip的選項去掉)。 \n \n 2.使用批次檔更改開始路徑，使用 Scite.exe 編輯器將原本的py373更改成新的3.8.2版本的路徑 \n @echo off\nset Disk=y\nsubst %Disk%: "data"\n\n%Disk%:\n\nset HomePath=%Disk%:\\home_mdecourse\nset HomeDrive=%Disk%:\\home_mdecourse\nset Home=%Disk%:\\home_mdecourse\nset USERPROFILE=%Disk%:\\home_mdecourse\n\nREM 將系統 Python 程式的 io 設為 utf-8\nset PYTHONIOENCODING="utf-8"\n\nset PYTHONPATH=%Disk%:\\py382\\DLLs;%Disk%:\\py382\\Lib;%Disk%:\\py382\\Lib\\site-packages;\nset PYTHONHOME=%Disk%:\\py382\n\nset path_python=%Disk%:\\py382;%Disk%:\\py382\\Scripts;\nset path_msys2=%Disk%:\\msys64\\mingw64\\bin;\nREM coreutils is for compiling fossil scm\nset path_coreutils=%Disk%:\\coreutils-5.3.0\\bin;%Disk%:\\depends22_x64;\nset path_tcc=%Disk%:\\tcc;\nset path_cmake=%Disk%:\\cmake-3.10.1-win64-x64\\bin;\nset path_nodejs=Disk%:\\nodejs;%Disk%:\\nodejs\\appdata\\roaming\\npm;\nset path_git=%Disk%:\\portablegit\\bin;\nset path_xming=%Disk%:\\Xming;\nset path_latex=%%Disk%:\\Pandoc;%Disk%:\\TinyTeX\\bin\\win32;\n\npath=%Disk%:;%path_python%;%path_msys2%;%path_tcc%;%path_git%;%path_cmake%;%path_coreutils%;\n\nstart /MIN cmd.exe\nstart /MIN cmd.exe\nstart /MIN cmd.exe\nstart /MIN cmd.exe\n\nstart /MIN %Disk%:\\wscite415\\wscite\\SciTE.exe\nstart /MIN %Disk%:\\wscite415\\wscite\\SciTE.exe\n\nExit \n 3.執行get-pip.py (取得安裝管理工具) \n \n 4.執行pip install指令將 \n Flask \n Markdown \n lxml \n bs4 \n flask_cors \n pelican \n leo \n 這些3.8.2版本缺少的模組依序安裝下來。 \n \n', 'tags': '', 'url': 'w2.html'}, {'title': 'w4', 'text': '更新至倉儲3.8.2後，launchLeo.py會無法執行 \n 解決方式: \n 1.開啟start_mdecourse.bat \n 2.進入SCiTE程式編輯器，點選Options，點選 open python.properties \n \n 4.使用ctrl+H功能，將py373取代為 python3.8.2的資料夾名稱(我的是py382) \n # Define SciTE settings for Python files.\n\nfile.patterns.py=*.py;*.pyw;*.pyx;*.pxd;*.pxi\nfile.patterns.scons=SConstruct;SConscript\n\n*source.patterns.python=$(file.patterns.py);\n\nshbang.python=py\n\nfilter.python=Python (py pyw)|$(file.patterns.py)|\n\n*filter.python=$(filter.python)\n\nlexer.$(file.patterns.py)=python\nlexer.$(file.patterns.scons)=python\n\n*language.python=Pytho&n|py||\n\nkeywordclass.python2=and as assert break class continue def del elif \\\nelse except exec finally for from global if import in is lambda not \\\nor pass print raise return try while with yield\n\nkeywordclass.python3=False None True and as assert break class continue \\\ndef del elif else except finally for from global if import in is lambda \\\nnonlocal not or pass raise return try while with yield\n\nkeywordclass.python=$(keywordclass.python2)\n\n# Extra keywords for cython\nkeywordclass.cython=cdef cimport cpdef\n\nkeywords.$(file.patterns.py)=$(keywordclass.python) $(keywordclass.cython)\nkeywords.$(file.patterns.scons)=$(keywordclass.python)\n\n# If you uncomment the 3 lines below,\n# and put some words after "keywordclass2.python=",\n# those words will be styled by style.python.14\n\n#keywordclass2.python=\n#keywords2.$(file.patterns.py)=$(keywordclass2.python)\n#keywords2.$(file.patterns.scons)=$(keywordclass2.python)\n\n# Use 2 sets of substyles to highlight standard library modules and\n# imports from the future.\n# Additional identifier sets can be added by incrementing the  next\n# line\'s value and adding extra definitions similar to below.\nsubstyles.python.11=2\n\nsubstylewords.11.1.$(file.patterns.py)=\\\n__main__ _dummy_thread _thread abc aifc argparse \\\narray ast asynchat asyncio asyncore atexit audioop \\\nbase64 bdb binascii binhex bisect builtins bz2 \\\ncalendar cgi cgitb chunk cmath cmd code codecs \\\ncodeop collections colorsys compileall concurrent \\\nconfigparser contextlib copy copyreg crypt csv \\\nctypes curses datetime dbm decimal difflib dis \\\ndistutils dummy_threading email ensurepip enum \\\nerrno faulthandler fcntl filecmp fileinput fnmatch \\\nformatter fpectl fractions ftplib functools gc getopt \\\ngetpass gettext glob grp gzip hashlib heapq hmac \\\nhtml http http imaplib imghdr importlib inspect io \\\nipaddress itertools json keyword linecache locale \\\nlogging lzma macpath mailbox mailcap marshal math \\\nmimetypes mmap modulefinder msilib msvcrt \\\nmultiprocessing netrc nis nntplib numbers operator \\\nos os ossaudiodev parser pathlib pdb pickle \\\npickletools pipes pkgutil platform plistlib poplib posix \\\npprint pty pwd py_compile pyclbr queue quopri \\\nrandom re readline reprlib resource rlcompleter runpy \\\nsched select selectors shelve shlex shutil signal site \\\nsmtpd smtplib sndhdr socket socketserver spwd \\\nsqlite3 ssl stat statistics string stringprep struct \\\nsubprocess sunau symbol symtable sys sysconfig \\\nsyslog tabnanny tarfile telnetlib tempfile termios \\\ntextwrap threading time timeit tkinter token \\\ntokenize trace traceback tracemalloc tty turtle \\\ntypes unicodedata unittest urllib uu uuid venv warnings \\\nwave weakref webbrowser winreg winsound wsgiref \\\nxdrlib xml xmlrpc zipfile zipimport zlib\nstyle.python.11.1=fore:#DD9900\n\nsubstylewords.11.2.$(file.patterns.py)=__future__ \\\nwith_statement unicode_literals print_function\nstyle.python.11.2=fore:#EE00AA,italics\n\n#~ statement.indent.$(file.patterns.py)=10 :\nstatement.indent.$(file.patterns.py)=5 class def elif else except finally \\\nfor if try while with\n\nstatement.lookback.$(file.patterns.py)=0\nblock.start.$(file.patterns.py)=\nblock.end.$(file.patterns.py)=\n\nview.indentation.examine.*.py=2\n\ntab.timmy.whinge.level=1\n\n#fold.quotes.python=1\n\ncomment.block.python=#~\n\nindent.python.colon=1\n\n# Python styles\n# White space\nstyle.python.0=fore:#808080\n# Comment\nstyle.python.1=fore:#007F00,$(font.comment)\n# Number\nstyle.python.2=fore:#007F7F\n# String\nstyle.python.3=fore:#7F007F,$(font.monospace)\n# Single quoted string\nstyle.python.4=fore:#7F007F,$(font.monospace)\n# Keyword\nstyle.python.5=fore:#00007F,bold\n# Triple quotes\nstyle.python.6=fore:#7F0000\n# Triple double quotes\nstyle.python.7=fore:#7F0000\n# Class name definition\nstyle.python.8=fore:#0000FF,bold\n# Function or method name definition\nstyle.python.9=fore:#007F7F,bold\n# Operators\nstyle.python.10=bold\n# Identifiers\nstyle.python.11=\n# Comment-blocks\nstyle.python.12=fore:#7F7F7F\n# End of line where string is not closed\nstyle.python.13=fore:#000000,$(font.monospace),back:#E0C0E0,eolfilled\n# Highlighted identifiers\nstyle.python.14=fore:#407090\n# Decorators\nstyle.python.15=fore:#805000\n# F-String\nstyle.python.16=fore:#7F007F,$(font.monospace)\n# Single quoted f-string\nstyle.python.17=fore:#7F007F,$(font.monospace)\n# Triple quoted f-string\nstyle.python.18=fore:#7F0000\n# Triple double quoted f-string\nstyle.python.19=fore:#7F0000\n# Matched Operators\nstyle.python.34=fore:#0000FF,bold\nstyle.python.35=fore:#FF0000,bold\n# Braces are only matched in operator style\nbraces.python.style=10\n\nif PLAT_WIN\n\tcommand.go.*.py=y:\\py382\\pythonw -u "$(FileNameExt)"\n\tcommand.go.subsystem.*.py=1\n\tcommand.go.*.pyw=y:\\pythonw -u "$(FileNameExt)"\n\tcommand.go.subsystem.*.pyw=1\n\tcommand.build.SConscript=scons.bat --up .\n\tcommand.build.SConstruct=scons.bat .\n\nif PLAT_GTK\n\tcommand.go.*.py=y:\\py382\\python -u "$(FileNameExt)"\n\tcommand.build.SConscript=scons --up .\n\tcommand.build.SConstruct=scons .\n\nif PLAT_MAC\n\tcommand.go.*.py=python -u "$(FileNameExt)"\n\tcommand.build.SConscript=scons --up .\n\tcommand.build.SConstruct=scons .\n\ncommand.name.1.$(file.patterns.py)=Syntax Check\ncommand.1.$(file.patterns.py)=python -c "import py_compile; py_compile.compile(r\'$(FilePath)\')"\n \n 5.最後將launchleo.py檔案放入SciTE編輯器就能夠順利開啟leo Editor \n', 'tags': '', 'url': 'w4.html'}, {'title': 'w6', 'text': '使用 Youtube  &\xa0 OBS Portable 進行直播串流 \n \n 未來將使用 Google Hangout Meet 進行線上教程 \n pyslvs.exe \n \n', 'tags': '', 'url': 'w6.html'}, {'title': 'w7', 'text': '直播測試 \n \n', 'tags': '', 'url': 'w7.html'}, {'title': 'w8', 'text': '下載 CoppeliaSim ，並放到可攜系統上 \n 將 leo 升級到6.2.1 \n 用ssh \n', 'tags': '', 'url': 'w8.html'}, {'title': 'w9', 'text': '', 'tags': '', 'url': 'w9.html'}, {'title': 'w10', 'text': '直播分配工作 \n google API設立權限\xa0 \n \n', 'tags': '', 'url': 'w10.html'}, {'title': 'w11', 'text': '\n 出現問題 \n', 'tags': '', 'url': 'w11.html'}, {'title': 'w12', 'text': '繪製輪框(雖然已經被畫完了) \n - https://cad.onshape.com/documents/5ea9e00840f85da94167c18f/w/3a4374f14d8845fb65a4cfd1/e/9c9fdd2fa14faf9e992ff00d \n \n', 'tags': '', 'url': 'w12.html'}, {'title': '直播紀錄', 'text': 'w2 \n \n w4 \n \n \n w6 \n \n w7 \n \n w10 \n \n', 'tags': '', 'url': '直播紀錄.html'}, {'title': 'Webot', 'text': 'https://cyberbotics.com/doc/guide/menu \n', 'tags': '', 'url': 'Webot.html'}, {'title': 'Camera Sensors', 'text': '對於大多數應用程序而言，添加通用的 Camera 節點就足夠了。通用相機是可自定義的（分辨率，視野，噪點等），默認情況下包括變焦和聚焦機制。提供特殊效果，例如運動模糊，各種噪聲模型，鏡頭畸變和使用球形投影。 除了添加通用的 Camera 節點外，Webot中還提供了一些預定義的Camera模型。 \n Smart Camera \n 如果將識別 節點添加到相機，則相機不僅可以返回圖像，而且還可以返回相機圖像中檢測到的所有對象及其大小和位置。因此，模擬諸如Mobileye之類的智能相機非常容易。 \n \n \n MultiSense S21 \n \n \n 它 MultiSense S21 是基於立體相機的距離傳感器。 \n 我們的傳感器模型包括多個Webots設備。 \n IntertialUnit 存在 內部 設備以獲取設備的側傾，俯仰和偏航角。 可以使用Webots \xa0 相機 獨立檢索立體相機的左右RGB圖像 。 或者， 可以在 設備 中央啟用 RGB \xa0 相機 和 RangeFinder MultiSense S21 設備。 存在這兩個“元”設備以模仿由真實設備生成的3D彩色點的雲。 \n 可以 MultiSenseS21.name 使用 下表 從該 字段 計算用於從控制器檢索設備的內部設備名稱 ： \n \n \n \n \n \xa0 \n \xa0 \xa0 \xa0 \xa0\xa0 \n \n \n \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 MultiSenseS21 stereoscopic camera \n \n \n \n \n 該 name 字段定義 MultiSenseS21 名稱，並用於計算內部設備名稱 。 \n 該 cameraWidth 和 cameraHeight 字段指定所有內部渲染設備（即分辨率 相機 和 測距儀 ）。 \n 該 cameraFieldOfView 字段指定所有內部渲染設備的水平視場。 \n 該 cameraNoise 字段指定所有內部渲染設備的噪聲（參見 Camera.noise ）。 \n 該 rangeFinderNoise 字段指定內部meta RangeFinder的噪聲（參見 RangeFinder.noise ）。 \n 該 rangeFinderMaxRange 字段指定內部meta RangeFinder的最大範圍（參見 RangeFinder.maxRange ）。 \n 的 leftCamera ， rightCamera ， metaCamera 和 metaRangeFinder 字段允許以使相應的內部再現設備。 \n 該 enablePhysics 字段指定傳感器是否應受物理影響（質量= 1.5 [kg]）。 \n \n \n \n \n \n \n', 'tags': '', 'url': 'Camera Sensors.html'}, {'title': 'DistanceSensor Sensors', 'text': '距離傳感器 \n 對於大多數應用程序而言，添加通用的 DistanceSensor 節點就足夠了，因為它們是可自定義的（分辨率，lookupTable，光圈等）。 \n 此外，Webot中提供了一些預定義的商業化模型，例如某些紅外傳感器。 \n Index \n \n Sharp \n \n Sharp GP2D120 \n Sharp GP2Y0A02YK0F \n Sharp GP2Y0A41SK0F \n Sharp GP2Y0A710K0F \n \n \n \n Sharp \n Sharp GP2D120 \n \n Sharp GP2D120 \n Sharp GP2D120 是具有集成的信號處理和模擬電壓輸出的距離測量傳感器。該設備輸出與檢測距離相對應的電壓。 \n 該型號具有以下規格： \n \n effective range：4至30 [cm] \n output type：模擬 \n response time：39 [ms] \n start up delay：44 [毫秒] \n average consumption：33 [毫安] \n \n \n \n DistanceSensor 的lookupTable字段已根據 數據表中 的特性實現。 \n 該wb_distance_sensor_get_value函數返回測量的電壓/強度。要轉換這些值，請使用以下公式： \n \n 將米轉換為電壓：y(x) = 0.5131*x^(-0.5735)-0.6143 \n 將電壓轉換為米：y(x) = 0.1594*x^(-0.8533)-0.02916 \n \n Sharp GP2Y0A02YK0F \n \n Sharp GP2Y0A02YK0F \n Sharp GP2Y0A02YK0F 是一個距離測量傳感器單元，PSD（位置敏感檢測器）中，一個集成的組合構成的IR-LED（紅外線發光二極管）和信號處理電路。由於採用三角測量法，物體的反射率，環境溫度和工作持續時間的變化不容易影響距離檢測。該設備輸出與檢測距離相對應的電壓。因此，該傳感器也可以用作接近傳感器。 \n 該型號具有以下規格： \n \n effective range：20至150 [cm] \n output type：模擬 \n response time：33 [ms] \n start up delay：50 [ms] \n average consumption：33 [毫安] \n \n \n DistanceSensor 的lookupTable字段已根據 數據表中 的特性實現。 \n 該wb_distance_sensor_get_value函數返回測量的電壓/強度。要轉換這些值，請使用以下公式： \n \n 將米轉換為電壓：y(x) = 1.784*x^(-0.4215)-1.11 \n 將電壓轉換為米：y(x) = 0.7611*x^(-0.9313)-0.1252 \n \n Sharp GP2Y0A41SK0F \n \n Sharp GP2Y0A41SK0F \n Sharp GP2Y0A41SK0F 是一個距離測量傳感器單元，PSD（位置敏感檢測器）中，一個集成的組合構成的IR-LED（紅外線發光二極管）和信號處理電路。由於採用三角測量法，物體的反射率，環境溫度和工作持續時間的變化不容易影響距離檢測。該設備輸出與檢測距離相對應的電壓。因此，該傳感器也可以用作接近傳感器。 \n 該型號具有以下規格： \n \n effective range：4至30 [cm] \n output type：模擬 \n response time：5 [ms] \n start up delay：26 [ms] \n average consumption：12 [mA] \n \n \n DistanceSensor 的lookupTable字段已根據 數據表中 的特性實現。 \n 該wb_distance_sensor_get_value函數返回測量的電壓/強度。要轉換這些值，請使用以下公式： \n \n 將米轉換為電壓：y(x) = 0.5131*x^(-0.5735)-0.6143 \n 將電壓轉換為米：y(x) = 0.1594*x^(-0.8533)-0.02916 \n \n Sharp GP2Y0A710K0F \n \n GP2Y0A710K0F \n Sharp GP2Y0A710K0F 是一個距離測量傳感器單元，PSD（位置敏感檢測器）中，一個集成的組合構成的IR-LED（紅外線發光二極管）和信號處理電路。由於採用三角測量法，物體的反射率，環境溫度和工作持續時間的變化不容易影響距離檢測。該設備輸出與檢測距離相對應的電壓。因此，該傳感器也可以用作接近傳感器。 \n 該型號具有以下規格： \n \n effective range：100至550 [cm] \n output type：模擬 \n response time：21 [ms] \n start up delay：26 [ms] \n average consumption：30 [毫安] \n \n \n DistanceSensor 的lookupTable字段已根據 數據表中 的特性實現。 \n 該wb_distance_sensor_get_value函數返回測量的電壓/強度。要轉換這些值，請使用以下公式： \n \n 將米轉換為電壓：y(x) = 1.962*x^(-0.5214)+0.4926 \n 將電壓轉換為米：y(x) = 20.24*x^(-4.76)+0.6632 \n \n \xa0 \n \n \n', 'tags': '', 'url': 'DistanceSensor Sensors.html'}]};