{"changed":false,"filter":false,"title":"formatters.js","tooltip":"/js/formatters.js","undoManager":{"mark":69,"position":69,"stack":[[{"start":{"row":0,"column":0},"end":{"row":29,"column":1},"action":"insert","lines":["rivets.formatters.currency = function (value){","\treturn \"$\"+value;","}","","rivets.formatters.number = {","\tread: function (value){","\t\treturn parseFloat(value);","\t},","\tpublish: function (value){","\t\treturn parseFloat(value);","\t}","}","","rivets.formatters.positive = {","\tread: function (value){","\t\treturn Math.abs(value);","\t},","\tpublish: function (value){","\t\treturn Math.abs(value);","\t}","}","","rivets.formatters.integer = {","\tread: function (value){","\t\treturn parseInt(value);","\t},","\tpublish: function (value){","\t\treturn parseInt(value);","\t}","}"],"id":1}],[{"start":{"row":3,"column":0},"end":{"row":29,"column":1},"action":"remove","lines":["","rivets.formatters.number = {","\tread: function (value){","\t\treturn parseFloat(value);","\t},","\tpublish: function (value){","\t\treturn parseFloat(value);","\t}","}","","rivets.formatters.positive = {","\tread: function (value){","\t\treturn Math.abs(value);","\t},","\tpublish: function (value){","\t\treturn Math.abs(value);","\t}","}","","rivets.formatters.integer = {","\tread: function (value){","\t\treturn parseInt(value);","\t},","\tpublish: function (value){","\t\treturn parseInt(value);","\t}","}"],"id":2}],[{"start":{"row":2,"column":1},"end":{"row":3,"column":0},"action":"remove","lines":["",""],"id":3}],[{"start":{"row":0,"column":18},"end":{"row":0,"column":26},"action":"remove","lines":["currency"],"id":4},{"start":{"row":0,"column":18},"end":{"row":0,"column":19},"action":"insert","lines":["h"]}],[{"start":{"row":0,"column":19},"end":{"row":0,"column":20},"action":"insert","lines":["i"],"id":5}],[{"start":{"row":0,"column":20},"end":{"row":0,"column":21},"action":"insert","lines":["d"],"id":6}],[{"start":{"row":0,"column":21},"end":{"row":0,"column":22},"action":"insert","lines":["e"],"id":7}],[{"start":{"row":0,"column":22},"end":{"row":0,"column":23},"action":"insert","lines":["z"],"id":8}],[{"start":{"row":0,"column":23},"end":{"row":0,"column":24},"action":"insert","lines":["e"],"id":9}],[{"start":{"row":0,"column":24},"end":{"row":0,"column":25},"action":"insert","lines":["r"],"id":10}],[{"start":{"row":0,"column":25},"end":{"row":0,"column":26},"action":"insert","lines":["o"],"id":11}],[{"start":{"row":1,"column":1},"end":{"row":1,"column":18},"action":"remove","lines":["return \"$\"+value;"],"id":12}],[{"start":{"row":1,"column":1},"end":{"row":1,"column":2},"action":"insert","lines":["i"],"id":13}],[{"start":{"row":1,"column":2},"end":{"row":1,"column":3},"action":"insert","lines":["f"],"id":14}],[{"start":{"row":1,"column":1},"end":{"row":1,"column":3},"action":"remove","lines":["if"],"id":15},{"start":{"row":1,"column":1},"end":{"row":1,"column":3},"action":"insert","lines":["if"]}],[{"start":{"row":1,"column":1},"end":{"row":1,"column":3},"action":"remove","lines":["if"],"id":16},{"start":{"row":1,"column":1},"end":{"row":3,"column":2},"action":"insert","lines":["if (true) {","\t    ","\t}"]}],[{"start":{"row":1,"column":5},"end":{"row":1,"column":9},"action":"remove","lines":["true"],"id":17},{"start":{"row":1,"column":5},"end":{"row":1,"column":6},"action":"insert","lines":["v"]}],[{"start":{"row":1,"column":6},"end":{"row":1,"column":7},"action":"insert","lines":["l"],"id":18}],[{"start":{"row":1,"column":6},"end":{"row":1,"column":7},"action":"remove","lines":["l"],"id":19}],[{"start":{"row":1,"column":6},"end":{"row":1,"column":7},"action":"insert","lines":["a"],"id":20}],[{"start":{"row":1,"column":7},"end":{"row":1,"column":8},"action":"insert","lines":["l"],"id":21}],[{"start":{"row":1,"column":8},"end":{"row":1,"column":9},"action":"insert","lines":["e"],"id":22}],[{"start":{"row":1,"column":8},"end":{"row":1,"column":9},"action":"remove","lines":["e"],"id":23}],[{"start":{"row":1,"column":8},"end":{"row":1,"column":9},"action":"insert","lines":["u"],"id":24}],[{"start":{"row":1,"column":9},"end":{"row":1,"column":10},"action":"insert","lines":["e"],"id":25}],[{"start":{"row":1,"column":10},"end":{"row":1,"column":11},"action":"insert","lines":[" "],"id":26}],[{"start":{"row":1,"column":11},"end":{"row":1,"column":12},"action":"insert","lines":[">"],"id":27}],[{"start":{"row":1,"column":11},"end":{"row":1,"column":12},"action":"remove","lines":[">"],"id":28}],[{"start":{"row":1,"column":11},"end":{"row":1,"column":12},"action":"insert","lines":["="],"id":29}],[{"start":{"row":1,"column":12},"end":{"row":1,"column":13},"action":"insert","lines":["="],"id":30}],[{"start":{"row":1,"column":11},"end":{"row":1,"column":12},"action":"insert","lines":["!"],"id":31}],[{"start":{"row":1,"column":14},"end":{"row":1,"column":15},"action":"insert","lines":[" "],"id":32}],[{"start":{"row":1,"column":15},"end":{"row":1,"column":16},"action":"insert","lines":["0"],"id":33}],[{"start":{"row":2,"column":5},"end":{"row":2,"column":6},"action":"insert","lines":["r"],"id":34}],[{"start":{"row":2,"column":6},"end":{"row":2,"column":7},"action":"insert","lines":["e"],"id":35}],[{"start":{"row":2,"column":7},"end":{"row":2,"column":8},"action":"insert","lines":["t"],"id":36}],[{"start":{"row":2,"column":8},"end":{"row":2,"column":9},"action":"insert","lines":["u"],"id":37}],[{"start":{"row":2,"column":9},"end":{"row":2,"column":10},"action":"insert","lines":["r"],"id":38}],[{"start":{"row":2,"column":10},"end":{"row":2,"column":11},"action":"insert","lines":["n"],"id":39}],[{"start":{"row":2,"column":11},"end":{"row":2,"column":12},"action":"insert","lines":[" "],"id":40}],[{"start":{"row":2,"column":12},"end":{"row":2,"column":13},"action":"insert","lines":["v"],"id":41}],[{"start":{"row":2,"column":13},"end":{"row":2,"column":14},"action":"insert","lines":["a"],"id":42}],[{"start":{"row":2,"column":14},"end":{"row":2,"column":15},"action":"insert","lines":["l"],"id":43}],[{"start":{"row":2,"column":15},"end":{"row":2,"column":16},"action":"insert","lines":["u"],"id":44}],[{"start":{"row":2,"column":16},"end":{"row":2,"column":17},"action":"insert","lines":["e"],"id":45}],[{"start":{"row":3,"column":2},"end":{"row":3,"column":3},"action":"insert","lines":[" "],"id":46}],[{"start":{"row":3,"column":3},"end":{"row":3,"column":4},"action":"insert","lines":["e"],"id":47}],[{"start":{"row":3,"column":4},"end":{"row":3,"column":5},"action":"insert","lines":["l"],"id":48}],[{"start":{"row":3,"column":5},"end":{"row":3,"column":6},"action":"insert","lines":["s"],"id":49}],[{"start":{"row":3,"column":6},"end":{"row":3,"column":7},"action":"insert","lines":["e"],"id":50}],[{"start":{"row":3,"column":7},"end":{"row":3,"column":8},"action":"insert","lines":[" "],"id":51}],[{"start":{"row":3,"column":8},"end":{"row":3,"column":9},"action":"insert","lines":["r"],"id":52}],[{"start":{"row":3,"column":9},"end":{"row":3,"column":10},"action":"insert","lines":["e"],"id":53}],[{"start":{"row":3,"column":10},"end":{"row":3,"column":11},"action":"insert","lines":["t"],"id":54}],[{"start":{"row":3,"column":11},"end":{"row":3,"column":12},"action":"insert","lines":["u"],"id":55}],[{"start":{"row":3,"column":12},"end":{"row":3,"column":13},"action":"insert","lines":["r"],"id":56}],[{"start":{"row":3,"column":13},"end":{"row":3,"column":14},"action":"insert","lines":["n"],"id":57}],[{"start":{"row":3,"column":1},"end":{"row":3,"column":2},"action":"remove","lines":["}"],"id":58}],[{"start":{"row":1,"column":18},"end":{"row":1,"column":19},"action":"remove","lines":["{"],"id":59}],[{"start":{"row":2,"column":17},"end":{"row":2,"column":18},"action":"insert","lines":[";"],"id":60}],[{"start":{"row":3,"column":13},"end":{"row":3,"column":14},"action":"insert","lines":["'"],"id":61}],[{"start":{"row":3,"column":13},"end":{"row":3,"column":14},"action":"remove","lines":["'"],"id":62}],[{"start":{"row":3,"column":13},"end":{"row":3,"column":14},"action":"insert","lines":[";"],"id":63}],[{"start":{"row":3,"column":13},"end":{"row":3,"column":14},"action":"insert","lines":[" "],"id":64}],[{"start":{"row":3,"column":14},"end":{"row":3,"column":16},"action":"insert","lines":["\"\""],"id":65}],[{"start":{"row":3,"column":15},"end":{"row":3,"column":16},"action":"insert","lines":[" "],"id":66}],[{"start":{"row":3,"column":16},"end":{"row":3,"column":17},"action":"remove","lines":["\""],"id":69}],[{"start":{"row":3,"column":15},"end":{"row":3,"column":16},"action":"remove","lines":[" "],"id":70}],[{"start":{"row":3,"column":14},"end":{"row":3,"column":15},"action":"remove","lines":["\""],"id":71}],[{"start":{"row":3,"column":13},"end":{"row":3,"column":14},"action":"remove","lines":[" "],"id":72}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":3,"column":13},"end":{"row":3,"column":13},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1436090151000}