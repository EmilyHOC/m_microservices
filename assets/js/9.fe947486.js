(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{281:function(s,a,t){"use strict";t.r(a);var n=t(14),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"consul"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#consul"}},[s._v("#")]),s._v(" consul")]),s._v(" "),a("p",[s._v("作用： 为Kong提供dns服务")]),s._v(" "),a("p",[s._v("默认启动端口：8500")]),s._v(" "),a("h2",{attrs:{id:"安装consul"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装consul"}},[s._v("#")]),s._v(" 安装consul")]),s._v(" "),a("div",{staticClass:"language-# extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("sudo yum install -y yum-utils\nsudo yum-config-manager --add-repo https://rpm.releases.hashicorp.com/RHEL/hashicorp.repo\nsudo yum -y install consul\n")])])]),a("h2",{attrs:{id:"consul配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#consul配置文件"}},[s._v("#")]),s._v(" consul配置文件")]),s._v(" "),a("div",{staticClass:"language-# extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('{\n    "datacenter": "dc1",\n    "data_dir": "/root/consul/data",\n    "log_level": "INFO",\n    "log_file": "/root/consul/log",\n    "log_rotate_bytes": 10485760,\n    "log_rotate_max_files": 10,\n    "log_json": false,\n    "server": true,\n    "node_name": "server_main",\n    "ui": true,\n    "bind_addr": "10.16.193.71",\n    "client_addr": "0.0.0.0",\n    "bootstrap_expect": 1,\n    "ports":{\n      "http": 8500,\n      "https": 8501,\n      "dns": 8600,\n      "server": 8300,\n      "serf_lan": 8301,\n      "serf_wan": 8302\n    },\n    "auto_encrypt": {\n       "allow_tls": false\n    }\n}\n')])])]),a("h2",{attrs:{id:"启动命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动命令"}},[s._v("#")]),s._v(" 启动命令")]),s._v(" "),a("div",{staticClass:"language-# extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("nohup consul agent --config-file=/root/consul/config/server.json -join main &\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);