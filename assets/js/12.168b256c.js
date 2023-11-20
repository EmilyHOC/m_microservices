(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{284:function(v,r,_){"use strict";_.r(r);var a=_(14),t=Object(a.a)({},(function(){var v=this,r=v._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[r("h1",{attrs:{id:"常用linux命令"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#常用linux命令"}},[v._v("#")]),v._v(" 常用linux命令")]),v._v(" "),r("h2",{attrs:{id:"scp命令-文件拷贝"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#scp命令-文件拷贝"}},[v._v("#")]),v._v(" scp命令（文件拷贝）")]),v._v(" "),r("blockquote",[r("p",[v._v("scp 本地文件 远程用户名@ip地址:/拷贝的目录\n"),r("img",{attrs:{src:"/images/1.png",width:"619",height:"73"}})])]),v._v(" "),r("h2",{attrs:{id:"kill命令-向某个工作传送一个信号"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#kill命令-向某个工作传送一个信号"}},[v._v("#")]),v._v(" kill命令（向某个工作传送一个信号）")]),v._v(" "),r("p",[r("code",[v._v("pkill -9 nomad (杀死nomad 进程)")])]),v._v(" "),r("blockquote",[r("p",[v._v("格式：kill -signal PID")])]),v._v(" "),r("p",[v._v("sign数字代表的含义 1 :启动呗终止的进程 2：终端一个程序 9：强制中断 15：正常退出结束 17： 暂停 ）")]),v._v(" "),r("h2",{attrs:{id:"pwd-命令-显示当前工作目录"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pwd-命令-显示当前工作目录"}},[v._v("#")]),v._v(" pwd 命令（显示当前工作目录）")]),v._v(" "),r("h2",{attrs:{id:"ls-命令-列举"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ls-命令-列举"}},[v._v("#")]),v._v(" ls 命令（列举）")]),v._v(" "),r("p",[v._v("ls 查看目录中的文件")]),v._v(" "),r("p",[v._v("ls -a 包含隐藏文件")]),v._v(" "),r("p",[v._v("ls -l 显示文件和目录的详细资料（例如修改日期）")]),v._v(" "),r("h2",{attrs:{id:"ps-命令-查找"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ps-命令-查找"}},[v._v("#")]),v._v(" ps 命令 （查找）")]),v._v(" "),r("p",[v._v("ps aux   （查看系统所有的进程数据）")]),v._v(" "),r("p",[v._v("ps ax   （查看不与terminal有关的所有进程）")]),v._v(" "),r("p",[v._v("ps -lA   （查看系统所有的进程数据）")]),v._v(" "),r("p",[v._v("ps axjf  （查看连同一部分进程树状态）")]),v._v(" "),r("p",[r("code",[v._v("-e : 显示所有进程 -f : 全格式 -h : 不显示标题 -l : 长格式 -w : 宽输出 a ：显示终端上的所有进程，包括其他用户的进程。 r ：只显示正在运行的进程。 u ：以用户为主的格式来显示程序状况。 x ：显示所有程序，不以终端机来区分。")])]),v._v(" "),r("blockquote",[r("p",[r("code",[v._v("ps -ef | grep consul")]),v._v(" "),r("strong",[v._v("查找consul运行的进程")])])]),v._v(" "),r("h2",{attrs:{id:"chmod命令-改变文件的执行权限"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#chmod命令-改变文件的执行权限"}},[v._v("#")]),v._v(" chmod命令（改变文件的执行权限）")]),v._v(" "),r("p",[r("code",[v._v("chmod -R 777")]),v._v(" 将当前目录及目录下所有文件都给予777权限（所有权限）-R是递归")]),v._v(" "),r("h2",{attrs:{id:"rm命令-删除"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rm命令-删除"}},[v._v("#")]),v._v(" rm命令 （删除）")]),v._v(" "),r("p",[r("code",[v._v("rm -f file1")]),v._v(" 删除一个叫file1的文件")]),v._v(" "),r("p",[r("code",[v._v("rmdir dir1")]),v._v(" 删除一个叫dir1的目录（目录是空的才能删除）")]),v._v(" "),r("p",[r("code",[v._v("rm -rf dir1")]),v._v(" 删除一个叫dir1的目录并删除内容")]),v._v(" "),r("p",[r("code",[v._v("rm -rf dir1 dir2")]),v._v(" 同时删除两个目录和内容")]),v._v(" "),r("h2",{attrs:{id:"mkdir命令-创建目录"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mkdir命令-创建目录"}},[v._v("#")]),v._v(" mkdir命令（创建目录）")]),v._v(" "),r("p",[r("code",[v._v("mkdir dir1")]),v._v(" 创建一个叫做dir1的目录")]),v._v(" "),r("p",[r("code",[v._v("mkdir dir1 dir2")]),v._v(" 同时创建两个目录")]),v._v(" "),r("h2",{attrs:{id:"mv-命令-移动"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mv-命令-移动"}},[v._v("#")]),v._v(" mv 命令 （移动）")]),v._v(" "),r("p",[r("code",[v._v("mv file1 file2")]),v._v(" 把文件file1重命名为file2")]),v._v(" "),r("p",[r("code",[v._v("mv file1 file2 dir")]),v._v(" 把file1,file2移动到dir")]),v._v(" "),r("h2",{attrs:{id:"cp-命令-复制"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cp-命令-复制"}},[v._v("#")]),v._v(" cp 命令（复制）")]),v._v(" "),r("p",[r("code",[v._v("cp -a file1 file2")]),v._v("  连同文件的所有特性把文件file1复制成文件file2")]),v._v(" "),r("p",[r("code",[v._v("cp dir/* .")]),v._v("  复制一个目录下的所有文件到当前工作目录")]),v._v(" "),r("p",[r("code",[v._v("cp -a /tmp/dir1 .")]),v._v("  复制一个目录到当前工作目录")]),v._v(" "),r("p",[r("code",[v._v("cp -a dir1 dir2")]),v._v("  复制一个目录")])])}),[],!1,null,null,null);r.default=t.exports}}]);