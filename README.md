# Information Security with HelmetJS

This is the boilerplate for the Information Security lessons. Instructions for completing these lessons start at https://www.freecodecamp.org/learn/information-security/information-security-with-helmetjs/
body {
  background-color: #ddd;
  color: #333;
  font-family: sans-serif;
  text-align: center;
}
<!DOCTYPE html>
<html>
  <head>
    <title>Infosec Challenges</title>
    <meta name="" content="Free Code Camp - Infosec Challenges">
    <link rel="shortcut icon" href="https://cdn.hyperdev.com/us-east-1%3A52a203ff-088b-420f-81be-45bf559d01b1%2Ffavicon.ico" type="image/x-icon"/>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="style.css">
  </head>

  <body>
    <header>
      <h1>
        4. Free Code Camp - Applied InfoSec Challenges
      </h1>
    </header>

    <main>
    </main>

    <footer>
      <a href="https://repl.it/github/freeCodeCamp/boilerplate-infosec">
        Fork on Repl.it
      </a>
    </footer>

  </body>
</html>
# Tell Linguist to exclude HTML files to help Replit language detection.
*.html linguist-vendored


/node_modules/
.replit
const express = require('express');
const app = express();
{
	"name": "fcc-infosec-challenges",
	"version": "0.0.1",
	"lockfileVersion": 2,
	"requires": true,
	"packages": {
		"": {
			"name": "fcc-infosec-challenges",
			"version": "0.0.1",
			"license": "MIT",
			"dependencies": {
				"express": "^4.14.0",
			  "helmet": "3.21.3"
			}
		},
		"node_modules/accepts": {
			"version": "1.3.7",
			"resolved": "https://registry.npmjs.org/accepts/-/accepts-1.3.7.tgz",
			"integrity": "sha512-Il80Qs2WjYlJIBNzNkK6KYqlVMTbZLXgHx2oT0pU/fjRHyEp+PEfEPY0R3WCwAGVOtauxh1hOxNgIf5bv7dQpA==",
			"dependencies": {
				"mime-types": "~2.1.24",
				"negotiator": "0.6.2"
			},
			"engines": {
				"node": ">= 0.6"
			}
		},
		"node_modules/array-flatten": {
			"version": "1.1.1",
			"resolved": "https://registry.npmjs.org/array-flatten/-/array-flatten-1.1.1.tgz",
			"integrity": "sha1-ml9pkFGx5wczKPKgCJaLZOopVdI="
		},
		"node_modules/body-parser": {
			"version": "1.19.0",
			"resolved": "https://registry.npmjs.org/body-parser/-/body-parser-1.19.0.tgz",
			"integrity": "sha512-dhEPs72UPbDnAQJ9ZKMNTP6ptJaionhP5cBb541nXPlW60Jepo9RV/a4fX4XWW9CuFNK22krhrj1+rgzifNCsw==",
			"dependencies": {
				"bytes": "3.1.0",
				"content-type": "~1.0.4",
				"debug": "2.6.9",
				"depd": "~1.1.2",
				"http-errors": "1.7.2",
				"iconv-lite": "0.4.24",
				"on-finished": "~2.3.0",
				"qs": "6.7.0",
				"raw-body": "2.4.0",
				"type-is": "~1.6.17"
			},
			"engines": {
				"node": ">= 0.8"
			}
		},
		"node_modules/bowser": {
			"version": "2.9.0",
			"resolved": "https://registry.npmjs.org/bowser/-/bowser-2.9.0.tgz",
			"integrity": "sha512-2ld76tuLBNFekRgmJfT2+3j5MIrP6bFict8WAIT3beq+srz1gcKNAdNKMqHqauQt63NmAa88HfP1/Ypa9Er3HA=="
		},
		"node_modules/bytes": {
			"version": "3.1.0",
			"resolved": "https://registry.npmjs.org/bytes/-/bytes-3.1.0.tgz",
			"integrity": "sha512-zauLjrfCG+xvoyaqLoV8bLVXXNGC4JqlxFCutSDWA6fJrTo2ZuvLYTqZ7aHBLZSMOopbzwv8f+wZcVzfVTI2Dg==",
			"engines": {
				"node": ">= 0.8"
			}
		},
		"node_modules/camelize": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/camelize/-/camelize-1.0.0.tgz",
			"integrity": "sha512-W2lPwkBkMZwFlPCXhIlYgxu+7gC/NUlCtdK652DAJ1JdgV0sTrvuPFshNPrFa1TY2JOkLhgdeEBplB4ezEa+xg=="
		},
		"node_modules/content-disposition": {
			"version": "0.5.3",
			"resolved": "https://registry.npmjs.org/content-disposition/-/content-disposition-0.5.3.tgz",
			"integrity": "sha512-ExO0774ikEObIAEV9kDo50o+79VCUdEB6n6lzKgGwupcVeRlhrj3qGAfwq8G6uBJjkqLrhT0qEYFcWng8z1z0g==",
			"dependencies": {
				"safe-buffer": "5.1.2"
			},
			"engines": {
				"node": ">= 0.6"
			}
		},
		"node_modules/content-security-policy-builder": {
			"version": "2.1.0",
			"resolved": "https://registry.npmjs.org/content-security-policy-builder/-/content-security-policy-builder-2.1.0.tgz",
			"integrity": "sha512-/MtLWhJVvJNkA9dVLAp6fg9LxD2gfI6R2Fi1hPmfjYXSahJJzcfvoeDOxSyp4NvxMuwWv3WMssE9o31DoULHrQ==",
			"engines": {
				"node": ">=4.0.0"
			}
		},
		"node_modules/content-type": {
			"version": "1.0.4",
			"resolved": "https://registry.npmjs.org/content-type/-/content-type-1.0.4.tgz",
			"integrity": "sha512-hIP3EEPs8tB9AT1L+NUqtwOAps4mk2Zob89MWXMHjHWg9milF/j4osnnQLXBCBFBk/tvIG/tUc9mOUJiPBhPXA==",
			"engines": {
				"node": ">= 0.6"
			}
		},
		"node_modules/cookie": {
			"version": "0.4.0",
			"resolved": "https://registry.npmjs.org/cookie/-/cookie-0.4.0.tgz",
			"integrity": "sha512-+Hp8fLp57wnUSt0tY0tHEXh4voZRDnoIrZPqlo3DPiI4y9lwg/jqx+1Om94/W6ZaPDOUbnjOt/99w66zk+l1Xg==",
			"engines": {
				"node": ">= 0.6"
			}
		},
		"node_modules/cookie-signature": {
			"version": "1.0.6",
			"resolved": "https://registry.npmjs.org/cookie-signature/-/cookie-signature-1.0.6.tgz",
			"integrity": "sha1-4wOogrNCzD7oylE6eZmXNNqzriw="
		},
		"node_modules/dasherize": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/dasherize/-/dasherize-2.0.0.tgz",
			"integrity": "sha512-APql/TZ6FdLEpf2z7/X2a2zyqK8juYtqaSVqxw9mYoQ64CXkfU15AeLh8pUszT8+fnYjgm6t0aIYpWKJbnLkuA=="
		},
		"node_modules/debug": {
			"version": "2.6.9",
			"resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
			"integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
			"dependencies": {
				"ms": "2.0.0"
			}
		},
		"node_modules/depd": {
			"version": "1.1.2",
			"resolved": "https://registry.npmjs.org/depd/-/depd-1.1.2.tgz",
			"integrity": "sha1-m81S4UwJd2PnSbJ0xDRu0uVgtak=",
			"engines": {
				"node": ">= 0.6"
			}
		},
		"node_modules/destroy": {
			"version": "1.0.4",
			"resolved": "https://registry.npmjs.org/destroy/-/destroy-1.0.4.tgz",
			"integrity": "sha1-l4hXRCxEdJ5CBmE+N5RiBYJqvYA="
		},
		"node_modules/dns-prefetch-control": {
			"version": "0.2.0",
			"resolved": "https://registry.npmjs.org/dns-prefetch-control/-/dns-prefetch-control-0.2.0.tgz",
			"integrity": "sha512-hvSnros73+qyZXhHFjx2CMLwoj3Fe7eR9EJsFsqmcI1bB2OBWL/+0YzaEaKssCHnj/6crawNnUyw74Gm2EKe+Q==",
			"engines": {
				"node": ">=4.0.0"
			}
		},
		"node_modules/dont-sniff-mimetype": {
			"version": "1.1.0",
			"resolved": "https://registry.npmjs.org/dont-sniff-mimetype/-/dont-sniff-mimetype-1.1.0.tgz",
			"integrity": "sha512-ZjI4zqTaxveH2/tTlzS1wFp+7ncxNZaIEWYg3lzZRHkKf5zPT/MnEG6WL0BhHMJUabkh8GeU5NL5j+rEUCb7Ug==",
			"engines": {
				"node": ">=4.0.0"
			}
		},
		"node_modules/ee-first": {
			"version": "1.1.1",
			"resolved": "https://registry.npmjs.org/ee-first/-/ee-first-1.1.1.tgz",
			"integrity": "sha1-WQxhFWsK4vTwJVcyoViyZrxWsh0="
		},
		"node_modules/encodeurl": {
			"version": "1.0.2",
			"resolved": "https://registry.npmjs.org/encodeurl/-/encodeurl-1.0.2.tgz",
			"integrity": "sha1-rT/0yG7C0CkyL1oCw6mmBslbP1k=",
			"engines": {
				"node": ">= 0.8"
			}
		},
		"node_modules/escape-html": {
			"version": "1.0.3",
			"resolved": "https://registry.npmjs.org/escape-html/-/escape-html-1.0.3.tgz",
			"integrity": "sha1-Aljq5NPQwJdN4cFpGI7wBR0dGYg="
		},
		"node_modules/etag": {
			"version": "1.8.1",
			"resolved": "https://registry.npmjs.org/etag/-/etag-1.8.1.tgz",
			"integrity": "sha1-Qa4u62XvpiJorr/qg6x9eSmbCIc=",
			"engines": {
				"node": ">= 0.6"
			}
		},
		"node_modules/expect-ct": {
			"version": "0.2.0",
			"resolved": "https://registry.npmjs.org/expect-ct/-/expect-ct-0.2.0.tgz",
			"integrity": "sha512-6SK3MG/Bbhm8MsgyJAylg+ucIOU71/FzyFalcfu5nY19dH8y/z0tBJU0wrNBXD4B27EoQtqPF/9wqH0iYAd04g==",
			"engines": {
				"node": ">=4.0.0"
			}
		},
		"node_modules/express": {
			"version": "4.17.1",
			"resolved": "https://registry.npmjs.org/express/-/express-4.17.1.tgz",
			"integrity": "sha512-mHJ9O79RqluphRrcw2X/GTh3k9tVv8YcoyY4Kkh4WDMUYKRZUq0h1o0w2rrrxBqM7VoeUVqgb27xlEMXTnYt4g==",
			"dependencies": {
				"accepts": "~1.3.7",
				"array-flatten": "1.1.1",
				"body-parser": "1.19.0",
				"content-disposition": "0.5.3",
				"content-type": "~1.0.4",
				"cookie": "0.4.0",
				"cookie-signature": "1.0.6",
				"debug": "2.6.9",
				"depd": "~1.1.2",
				"encodeurl": "~1.0.2",
				"escape-html": "~1.0.3",
				"etag": "~1.8.1",
				"finalhandler": "~1.1.2",
				"fresh": "0.5.2",
				"merge-descriptors": "1.0.1",
				"methods": "~1.1.2",
				"on-finished": "~2.3.0",
				"parseurl": "~1.3.3",
				"path-to-regexp": "0.1.7",
				"proxy-addr": "~2.0.5",
				"qs": "6.7.0",
				"range-parser": "~1.2.1",
				"safe-buffer": "5.1.2",
				"send": "0.17.1",
				"serve-static": "1.14.1",
				"setprototypeof": "1.1.1",
				"statuses": "~1.5.0",
				"type-is": "~1.6.18",
				"utils-merge": "1.0.1",
				"vary": "~1.1.2"
			},
			"engines": {
				"node": ">= 0.10.0"
			}
		},
		"node_modules/feature-policy": {
			"version": "0.3.0",
			"resolved": "https://registry.npmjs.org/feature-policy/-/feature-policy-0.3.0.tgz",
			"integrity": "sha512-ZtijOTFN7TzCujt1fnNhfWPFPSHeZkesff9AXZj+UEjYBynWNUIYpC87Ve4wHzyexQsImicLu7WsC2LHq7/xrQ==",
			"engines": {
				"node": ">=4.0.0"
			}
		},
		"node_modules/finalhandler": {
			"version": "1.1.2",
			"resolved": "https://registry.npmjs.org/finalhandler/-/finalhandler-1.1.2.tgz",
			"integrity": "sha512-aAWcW57uxVNrQZqFXjITpW3sIUQmHGG3qSb9mUah9MgMC4NeWhNOlNjXEYq3HjRAvL6arUviZGGJsBg6z0zsWA==",
			"dependencies": {
				"debug": "2.6.9",
				"encodeurl": "~1.0.2",
				"escape-html": "~1.0.3",
				"on-finished": "~2.3.0",
				"parseurl": "~1.3.3",
				"statuses": "~1.5.0",
				"unpipe": "~1.0.0"
			},
			"engines": {
				"node": ">= 0.8"
			}
		},
		"node_modules/forwarded": {
			"version": "0.1.2",
			"resolved": "https://registry.npmjs.org/forwarded/-/forwarded-0.1.2.tgz",
			"integrity": "sha1-mMI9qxF1ZXuMBXPozszZGw/xjIQ=",
			"engines": {
				"node": ">= 0.6"
			}
		},
		"node_modules/frameguard": {
			"version": "3.1.0",
			"resolved": "https://registry.npmjs.org/frameguard/-/frameguard-3.1.0.tgz",
			"integrity": "sha512-TxgSKM+7LTA6sidjOiSZK9wxY0ffMPY3Wta//MqwmX0nZuEHc8QrkV8Fh3ZhMJeiH+Uyh/tcaarImRy8u77O7g==",
			"engines": {
				"node": ">=4.0.0"
			}
		},
		"node_modules/fresh": {
			"version": "0.5.2",
			"resolved": "https://registry.npmjs.org/fresh/-/fresh-0.5.2.tgz",
			"integrity": "sha1-PYyt2Q2XZWn6g1qx+OSyOhBWBac=",
			"engines": {
				"node": ">= 0.6"
			}
		},
		"node_modules/helmet": {
			"version": "3.21.3",
			"resolved": "https://registry.npmjs.org/helmet/-/helmet-3.21.3.tgz",
			"integrity": "sha512-8OjGNdpG3WQhPO71fSy2fT4X3FSNutU1LDeAf+YS+Vil6r+fE7w8per5mNed6egGYbZl3QhKXgFzMYSwys+YQw==",
			"dependencies": {
				"depd": "2.0.0",
				"dns-prefetch-control": "0.2.0",
				"dont-sniff-mimetype": "1.1.0",
				"expect-ct": "0.2.0",
				"feature-policy": "0.3.0",
				"frameguard": "3.1.0",
				"helmet-crossdomain": "0.4.0",
				"helmet-csp": "2.9.5",
				"hide-powered-by": "1.1.0",
				"hpkp": "2.0.0",
				"hsts": "2.2.0",
				"ienoopen": "1.1.0",
				"nocache": "2.1.0",
				"referrer-policy": "1.2.0",
				"x-xss-protection": "1.3.0"
			},
			"engines": {
				"node": ">=4.0.0"
			}
		},
		"node_modules/helmet-crossdomain": {
			"version": "0.4.0",
			"resolved": "https://registry.npmjs.org/helmet-crossdomain/-/helmet-crossdomain-0.4.0.tgz",
			"integrity": "sha512-AB4DTykRw3HCOxovD1nPR16hllrVImeFp5VBV9/twj66lJ2nU75DP8FPL0/Jp4jj79JhTfG+pFI2MD02kWJ+fA==",
			"engines": {
				"node": ">=4.0.0"
			}
		},
		"node_modules/helmet-csp": {
			"version": "2.9.5",
			"resolved": "https://registry.npmjs.org/helmet-csp/-/helmet-csp-2.9.5.tgz",
			"integrity": "sha512-w9nps5adqFQwgktVPDbXkARmZot/nr8aegzQas9AXdBSwBFBBefPpDSTV0wtgHlAUdDwY6MZo7qAl9yts3ppJg==",
			"dependencies": {
				"bowser": "2.9.0",
				"camelize": "1.0.0",
				"content-security-policy-builder": "2.1.0",
				"dasherize": "2.0.0"
			},
			"engines": {
				"node": ">=4.0.0"
			}
		},
		"node_modules/helmet/node_modules/depd": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/depd/-/depd-2.0.0.tgz",
			"integrity": "sha512-g7nH6P6dyDioJogAAGprGpCtVImJhpPk/roCzdb3fIh61/s/nPsfR6onyMwkCAR/OlC3yBC0lESvUoQEAssIrw==",
			"engines": {
				"node": ">= 0.8"
			}
		},
		"node_modules/hide-powered-by": {
			"version": "1.1.0",
			"resolved": "https://registry.npmjs.org/hide-powered-by/-/hide-powered-by-1.1.0.tgz",
			"integrity": "sha512-Io1zA2yOA1YJslkr+AJlWSf2yWFkKjvkcL9Ni1XSUqnGLr/qRQe2UI3Cn/J9MsJht7yEVCe0SscY1HgVMujbgg==",
			"engines": {
				"node": ">=4.0.0"
			}
		},
		"node_modules/hpkp": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/hpkp/-/hpkp-2.0.0.tgz",
			"integrity": "sha512-TaZpC6cO/k3DFsjfzz1LnOobbVSq+J+7WpJxrVtN4L+8+BPQj8iBDRB2Dx49613N+e7/+ZSQ9ra+xZm7Blf4wg=="
		},
		"node_modules/hsts": {
			"version": "2.2.0",
			"resolved": "https://registry.npmjs.org/hsts/-/hsts-2.2.0.tgz",
			"integrity": "sha512-ToaTnQ2TbJkochoVcdXYm4HOCliNozlviNsg+X2XQLQvZNI/kCHR9rZxVYpJB3UPcHz80PgxRyWQ7PdU1r+VBQ==",
			"dependencies": {
				"depd": "2.0.0"
			},
			"engines": {
				"node": ">=4.0.0"
			}
		},
		"node_modules/hsts/node_modules/depd": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/depd/-/depd-2.0.0.tgz",
			"integrity": "sha512-g7nH6P6dyDioJogAAGprGpCtVImJhpPk/roCzdb3fIh61/s/nPsfR6onyMwkCAR/OlC3yBC0lESvUoQEAssIrw==",
			"engines": {
				"node": ">= 0.8"
			}
		},
		"node_modules/http-errors": {
			"version": "1.7.2",
			"resolved": "https://registry.npmjs.org/http-errors/-/http-errors-1.7.2.tgz",
			"integrity": "sha512-uUQBt3H/cSIVfch6i1EuPNy/YsRSOUBXTVfZ+yR7Zjez3qjBz6i9+i4zjNaoqcoFVI4lQJ5plg63TvGfRSDCRg==",
			"dependencies": {
				"depd": "~1.1.2",
				"inherits": "2.0.3",
				"setprototypeof": "1.1.1",
				"statuses": ">= 1.5.0 < 2",
				"toidentifier": "1.0.0"
			},
			"engines": {
				"node": ">= 0.6"
			}
		},
		"node_modules/iconv-lite": {
			"version": "0.4.24",
			"resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.4.24.tgz",
			"integrity": "sha512-v3MXnZAcvnywkTUEZomIActle7RXXeedOR31wwl7VlyoXO4Qi9arvSenNQWne1TcRwhCL1HwLI21bEqdpj8/rA==",
			"dependencies": {
				"safer-buffer": ">= 2.1.2 < 3"
			},
			"engines": {
				"node": ">=0.10.0"
			}
		},
		"node_modules/ienoopen": {
			"version": "1.1.0",
			"resolved": "https://registry.npmjs.org/ienoopen/-/ienoopen-1.1.0.tgz",
			"integrity": "sha512-MFs36e/ca6ohEKtinTJ5VvAJ6oDRAYFdYXweUnGY9L9vcoqFOU4n2ZhmJ0C4z/cwGZ3YIQRSB3XZ1+ghZkY5NQ==",
			"engines": {
				"node": ">=4.0.0"
			}
		},
		"node_modules/inherits": {
			"version": "2.0.3",
			"resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.3.tgz",
			"integrity": "sha1-Yzwsg+PaQqUC9SRmAiSA9CCCYd4="
		},
		"node_modules/ipaddr.js": {
			"version": "1.9.1",
			"resolved": "https://registry.npmjs.org/ipaddr.js/-/ipaddr.js-1.9.1.tgz",
			"integrity": "sha512-0KI/607xoxSToH7GjN1FfSbLoU0+btTicjsQSWQlh/hZykN8KpmMf7uYwPW3R+akZ6R/w18ZlXSHBYXiYUPO3g==",
			"engines": {
				"node": ">= 0.10"
			}
		},
		"node_modules/media-typer": {
			"version": "0.3.0",
			"resolved": "https://registry.npmjs.org/media-typer/-/media-typer-0.3.0.tgz",
			"integrity": "sha1-hxDXrwqmJvj/+hzgAWhUUmMlV0g=",
			"engines": {
				"node": ">= 0.6"
			}
		},
		"node_modules/merge-descriptors": {
			"version": "1.0.1",
			"resolved": "https://registry.npmjs.org/merge-descriptors/-/merge-descriptors-1.0.1.tgz",
			"integrity": "sha1-sAqqVW3YtEVoFQ7J0blT8/kMu2E="
		},
		"node_modules/methods": {
			"version": "1.1.2",
			"resolved": "https://registry.npmjs.org/methods/-/methods-1.1.2.tgz",
			"integrity": "sha1-VSmk1nZUE07cxSZmVoNbD4Ua/O4=",
			"engines": {
				"node": ">= 0.6"
			}
		},
		"node_modules/mime": {
			"version": "1.6.0",
			"resolved": "https://registry.npmjs.org/mime/-/mime-1.6.0.tgz",
			"integrity": "sha512-x0Vn8spI+wuJ1O6S7gnbaQg8Pxh4NNHb7KSINmEWKiPE4RKOplvijn+NkmYmmRgP68mc70j2EbeTFRsrswaQeg==",
			"bin": {
				"mime": "cli.js"
			},
			"engines": {
				"node": ">=4"
			}
		},
		"node_modules/mime-db": {
			"version": "1.44.0",
			"resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.44.0.tgz",
			"integrity": "sha512-/NOTfLrsPBVeH7YtFPgsVWveuL+4SjjYxaQ1xtM1KMFj7HdxlBlxeyNLzhyJVx7r4rZGJAZ/6lkKCitSc/Nmpg==",
			"engines": {
				"node": ">= 0.6"
			}
		},
		"node_modules/mime-types": {
			"version": "2.1.27",
			"resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.27.tgz",
			"integrity": "sha512-JIhqnCasI9yD+SsmkquHBxTSEuZdQX5BuQnS2Vc7puQQQ+8yiP5AY5uWhpdv4YL4VM5c6iliiYWPgJ/nJQLp7w==",
			"dependencies": {
				"mime-db": "1.44.0"
			},
			"engines": {
				"node": ">= 0.6"
			}
		},
		"node_modules/ms": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
			"integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g="
		},
		"node_modules/negotiator": {
			"version": "0.6.2",
			"resolved": "https://registry.npmjs.org/negotiator/-/negotiator-0.6.2.tgz",
			"integrity": "sha512-hZXc7K2e+PgeI1eDBe/10Ard4ekbfrrqG8Ep+8Jmf4JID2bNg7NvCPOZN+kfF574pFQI7mum2AUqDidoKqcTOw==",
			"engines": {
				"node": ">= 0.6"
			}
		},
		"node_modules/nocache": {
			"version": "2.1.0",
			"resolved": "https://registry.npmjs.org/nocache/-/nocache-2.1.0.tgz",
			"integrity": "sha512-0L9FvHG3nfnnmaEQPjT9xhfN4ISk0A8/2j4M37Np4mcDesJjHgEUfgPhdCyZuFI954tjokaIj/A3NdpFNdEh4Q==",
			"engines": {
				"node": ">=4.0.0"
			}
		},
		"node_modules/on-finished": {
			"version": "2.3.0",
			"resolved": "https://registry.npmjs.org/on-finished/-/on-finished-2.3.0.tgz",
			"integrity": "sha1-IPEzZIGwg811M3mSoWlxqi2QaUc=",
			"dependencies": {
				"ee-first": "1.1.1"
			},
			"engines": {
				"node": ">= 0.8"
			}
		},
		"node_modules/parseurl": {
			"version": "1.3.3",
			"resolved": "https://registry.npmjs.org/parseurl/-/parseurl-1.3.3.tgz",
			"integrity": "sha512-CiyeOxFT/JZyN5m0z9PfXw4SCBJ6Sygz1Dpl0wqjlhDEGGBP1GnsUVEL0p63hoG1fcj3fHynXi9NYO4nWOL+qQ==",
			"engines": {
				"node": ">= 0.8"
			}
		},
		"node_modules/path-to-regexp": {
			"version": "0.1.7",
			"resolved": "https://registry.npmjs.org/path-to-regexp/-/path-to-regexp-0.1.7.tgz",
			"integrity": "sha1-32BBeABfUi8V60SQ5yR6G/qmf4w="
		},
		"node_modules/proxy-addr": {
			"version": "2.0.6",
			"resolved": "https://registry.npmjs.org/proxy-addr/-/proxy-addr-2.0.6.tgz",
			"integrity": "sha512-dh/frvCBVmSsDYzw6n926jv974gddhkFPfiN8hPOi30Wax25QZyZEGveluCgliBnqmuM+UJmBErbAUFIoDbjOw==",
			"dependencies": {
				"forwarded": "~0.1.2",
				"ipaddr.js": "1.9.1"
			},
			"engines": {
				"node": ">= 0.10"
			}
		},
		"node_modules/qs": {
			"version": "6.7.0",
			"resolved": "https://registry.npmjs.org/qs/-/qs-6.7.0.tgz",
			"integrity": "sha512-VCdBRNFTX1fyE7Nb6FYoURo/SPe62QCaAyzJvUjwRaIsc+NePBEniHlvxFmmX56+HZphIGtV0XeCirBtpDrTyQ==",
			"engines": {
				"node": ">=0.6"
			}
		},
		"node_modules/range-parser": {
			"version": "1.2.1",
			"resolved": "https://registry.npmjs.org/range-parser/-/range-parser-1.2.1.tgz",
			"integrity": "sha512-Hrgsx+orqoygnmhFbKaHE6c296J+HTAQXoxEF6gNupROmmGJRoyzfG3ccAveqCBrwr/2yxQ5BVd/GTl5agOwSg==",
			"engines": {
				"node": ">= 0.6"
			}
		},
		"node_modules/raw-body": {
			"version": "2.4.0",
			"resolved": "https://registry.npmjs.org/raw-body/-/raw-body-2.4.0.tgz",
			"integrity": "sha512-4Oz8DUIwdvoa5qMJelxipzi/iJIi40O5cGV1wNYp5hvZP8ZN0T+jiNkL0QepXs+EsQ9XJ8ipEDoiH70ySUJP3Q==",
			"dependencies": {
				"bytes": "3.1.0",
				"http-errors": "1.7.2",
				"iconv-lite": "0.4.24",
				"unpipe": "1.0.0"
			},
			"engines": {
				"node": ">= 0.8"
			}
		},
		"node_modules/referrer-policy": {
			"version": "1.2.0",
			"resolved": "https://registry.npmjs.org/referrer-policy/-/referrer-policy-1.2.0.tgz",
			"integrity": "sha512-LgQJIuS6nAy1Jd88DCQRemyE3mS+ispwlqMk3b0yjZ257fI1v9c+/p6SD5gP5FGyXUIgrNOAfmyioHwZtYv2VA==",
			"engines": {
				"node": ">=4.0.0"
			}
		},
		"node_modules/safe-buffer": {
			"version": "5.1.2",
			"resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.1.2.tgz",
			"integrity": "sha512-Gd2UZBJDkXlY7GbJxfsE8/nvKkUEU1G38c1siN6QP6a9PT9MmHB8GnpscSmMJSoF8LOIrt8ud/wPtojys4G6+g=="
		},
		"node_modules/safer-buffer": {
			"version": "2.1.2",
			"resolved": "https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz",
			"integrity": "sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg=="
		},
		"node_modules/send": {
			"version": "0.17.1",
			"resolved": "https://registry.npmjs.org/send/-/send-0.17.1.tgz",
			"integrity": "sha512-BsVKsiGcQMFwT8UxypobUKyv7irCNRHk1T0G680vk88yf6LBByGcZJOTJCrTP2xVN6yI+XjPJcNuE3V4fT9sAg==",
			"dependencies": {
				"debug": "2.6.9",
				"depd": "~1.1.2",
				"destroy": "~1.0.4",
				"encodeurl": "~1.0.2",
				"escape-html": "~1.0.3",
				"etag": "~1.8.1",
				"fresh": "0.5.2",
				"http-errors": "~1.7.2",
				"mime": "1.6.0",
				"ms": "2.1.1",
				"on-finished": "~2.3.0",
				"range-parser": "~1.2.1",
				"statuses": "~1.5.0"
			},
			"engines": {
				"node": ">= 0.8.0"
			}
		},
		"node_modules/send/node_modules/ms": {
			"version": "2.1.1",
			"resolved": "https://registry.npmjs.org/ms/-/ms-2.1.1.tgz",
			"integrity": "sha512-tgp+dl5cGk28utYktBsrFqA7HKgrhgPsg6Z/EfhWI4gl1Hwq8B/GmY/0oXZ6nF8hDVesS/FpnYaD/kOWhYQvyg=="
		},
		"node_modules/serve-static": {
			"version": "1.14.1",
			"resolved": "https://registry.npmjs.org/serve-static/-/serve-static-1.14.1.tgz",
			"integrity": "sha512-JMrvUwE54emCYWlTI+hGrGv5I8dEwmco/00EvkzIIsR7MqrHonbD9pO2MOfFnpFntl7ecpZs+3mW+XbQZu9QCg==",
			"dependencies": {
				"encodeurl": "~1.0.2",
				"escape-html": "~1.0.3",
				"parseurl": "~1.3.3",
				"send": "0.17.1"
			},
			"engines": {
				"node": ">= 0.8.0"
			}
		},
		"node_modules/setprototypeof": {
			"version": "1.1.1",
			"resolved": "https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.1.1.tgz",
			"integrity": "sha512-JvdAWfbXeIGaZ9cILp38HntZSFSo3mWg6xGcJJsd+d4aRMOqauag1C63dJfDw7OaMYwEbHMOxEZ1lqVRYP2OAw=="
		},
		"node_modules/statuses": {
			"version": "1.5.0",
			"resolved": "https://registry.npmjs.org/statuses/-/statuses-1.5.0.tgz",
			"integrity": "sha1-Fhx9rBd2Wf2YEfQ3cfqZOBR4Yow=",
			"engines": {
				"node": ">= 0.6"
			}
		},
		"node_modules/toidentifier": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/toidentifier/-/toidentifier-1.0.0.tgz",
			"integrity": "sha512-yaOH/Pk/VEhBWWTlhI+qXxDFXlejDGcQipMlyxda9nthulaxLZUNcUqFxokp0vcYnvteJln5FNQDRrxj3YcbVw==",
			"engines": {
				"node": ">=0.6"
			}
		},
		"node_modules/type-is": {
			"version": "1.6.18",
			"resolved": "https://registry.npmjs.org/type-is/-/type-is-1.6.18.tgz",
			"integrity": "sha512-TkRKr9sUTxEH8MdfuCSP7VizJyzRNMjj2J2do2Jr3Kym598JVdEksuzPQCnlFPW4ky9Q+iA+ma9BGm06XQBy8g==",
			"dependencies": {
				"media-typer": "0.3.0",
				"mime-types": "~2.1.24"
			},
			"engines": {
				"node": ">= 0.6"
			}
		},
		"node_modules/unpipe": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/unpipe/-/unpipe-1.0.0.tgz",
			"integrity": "sha1-sr9O6FFKrmFltIF4KdIbLvSZBOw=",
			"engines": {
				"node": ">= 0.8"
			}
		},
		"node_modules/utils-merge": {
			"version": "1.0.1",
			"resolved": "https://registry.npmjs.org/utils-merge/-/utils-merge-1.0.1.tgz",
			"integrity": "sha1-n5VxD1CiZ5R7LMwSR0HBAoQn5xM=",
			"engines": {
				"node": ">= 0.4.0"
			}
		},
		"node_modules/vary": {
			"version": "1.1.2",
			"resolved": "https://registry.npmjs.org/vary/-/vary-1.1.2.tgz",
			"integrity": "sha1-IpnwLG3tMNSllhsLn3RSShj2NPw=",
			"engines": {
				"node": ">= 0.8"
			}
		},
		"node_modules/x-xss-protection": {
			"version": "1.3.0",
			"resolved": "https://registry.npmjs.org/x-xss-protection/-/x-xss-protection-1.3.0.tgz",
			"integrity": "sha512-kpyBI9TlVipZO4diReZMAHWtS0MMa/7Kgx8hwG/EuZLiA6sg4Ah/4TRdASHhRRN3boobzcYgFRUFSgHRge6Qhg==",
			"engines": {
				"node": ">=4.0.0"
			}
		}
	},
	"dependencies": {
		"accepts": {
			"version": "1.3.7",
			"resolved": "https://registry.npmjs.org/accepts/-/accepts-1.3.7.tgz",
			"integrity": "sha512-Il80Qs2WjYlJIBNzNkK6KYqlVMTbZLXgHx2oT0pU/fjRHyEp+PEfEPY0R3WCwAGVOtauxh1hOxNgIf5bv7dQpA==",
			"requires": {
				"mime-types": "~2.1.24",
				"negotiator": "0.6.2"
			}
		},
		"array-flatten": {
			"version": "1.1.1",
			"resolved": "https://registry.npmjs.org/array-flatten/-/array-flatten-1.1.1.tgz",
			"integrity": "sha1-ml9pkFGx5wczKPKgCJaLZOopVdI="
		},
		"body-parser": {
			"version": "1.19.0",
			"resolved": "https://registry.npmjs.org/body-parser/-/body-parser-1.19.0.tgz",
			"integrity": "sha512-dhEPs72UPbDnAQJ9ZKMNTP6ptJaionhP5cBb541nXPlW60Jepo9RV/a4fX4XWW9CuFNK22krhrj1+rgzifNCsw==",
			"requires": {
				"bytes": "3.1.0",
				"content-type": "~1.0.4",
				"debug": "2.6.9",
				"depd": "~1.1.2",
				"http-errors": "1.7.2",
				"iconv-lite": "0.4.24",
				"on-finished": "~2.3.0",
				"qs": "6.7.0",
				"raw-body": "2.4.0",
				"type-is": "~1.6.17"
			}
		},
		"bowser": {
			"version": "2.9.0",
			"resolved": "https://registry.npmjs.org/bowser/-/bowser-2.9.0.tgz",
			"integrity": "sha512-2ld76tuLBNFekRgmJfT2+3j5MIrP6bFict8WAIT3beq+srz1gcKNAdNKMqHqauQt63NmAa88HfP1/Ypa9Er3HA=="
		},
		"bytes": {
			"version": "3.1.0",
			"resolved": "https://registry.npmjs.org/bytes/-/bytes-3.1.0.tgz",
			"integrity": "sha512-zauLjrfCG+xvoyaqLoV8bLVXXNGC4JqlxFCutSDWA6fJrTo2ZuvLYTqZ7aHBLZSMOopbzwv8f+wZcVzfVTI2Dg=="
		},
		"camelize": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/camelize/-/camelize-1.0.0.tgz",
			"integrity": "sha512-W2lPwkBkMZwFlPCXhIlYgxu+7gC/NUlCtdK652DAJ1JdgV0sTrvuPFshNPrFa1TY2JOkLhgdeEBplB4ezEa+xg=="
		},
		"content-disposition": {
			"version": "0.5.3",
			"resolved": "https://registry.npmjs.org/content-disposition/-/content-disposition-0.5.3.tgz",
			"integrity": "sha512-ExO0774ikEObIAEV9kDo50o+79VCUdEB6n6lzKgGwupcVeRlhrj3qGAfwq8G6uBJjkqLrhT0qEYFcWng8z1z0g==",
			"requires": {
				"safe-buffer": "5.1.2"
			}
		},
		"content-security-policy-builder": {
			"version": "2.1.0",
			"resolved": "https://registry.npmjs.org/content-security-policy-builder/-/content-security-policy-builder-2.1.0.tgz",
			"integrity": "sha512-/MtLWhJVvJNkA9dVLAp6fg9LxD2gfI6R2Fi1hPmfjYXSahJJzcfvoeDOxSyp4NvxMuwWv3WMssE9o31DoULHrQ=="
		},
		"content-type": {
			"version": "1.0.4",
			"resolved": "https://registry.npmjs.org/content-type/-/content-type-1.0.4.tgz",
			"integrity": "sha512-hIP3EEPs8tB9AT1L+NUqtwOAps4mk2Zob89MWXMHjHWg9milF/j4osnnQLXBCBFBk/tvIG/tUc9mOUJiPBhPXA=="
		},
		"cookie": {
			"version": "0.4.0",
			"resolved": "https://registry.npmjs.org/cookie/-/cookie-0.4.0.tgz",
			"integrity": "sha512-+Hp8fLp57wnUSt0tY0tHEXh4voZRDnoIrZPqlo3DPiI4y9lwg/jqx+1Om94/W6ZaPDOUbnjOt/99w66zk+l1Xg=="
		},
		"cookie-signature": {
			"version": "1.0.6",
			"resolved": "https://registry.npmjs.org/cookie-signature/-/cookie-signature-1.0.6.tgz",
			"integrity": "sha1-4wOogrNCzD7oylE6eZmXNNqzriw="
		},
		"dasherize": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/dasherize/-/dasherize-2.0.0.tgz",
			"integrity": "sha512-APql/TZ6FdLEpf2z7/X2a2zyqK8juYtqaSVqxw9mYoQ64CXkfU15AeLh8pUszT8+fnYjgm6t0aIYpWKJbnLkuA=="
		},
		"debug": {
			"version": "2.6.9",
			"resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
			"integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
			"requires": {
				"ms": "2.0.0"
			}
		},
		"depd": {
			"version": "1.1.2",
			"resolved": "https://registry.npmjs.org/depd/-/depd-1.1.2.tgz",
			"integrity": "sha1-m81S4UwJd2PnSbJ0xDRu0uVgtak="
		},
		"destroy": {
			"version": "1.0.4",
			"resolved": "https://registry.npmjs.org/destroy/-/destroy-1.0.4.tgz",
			"integrity": "sha1-l4hXRCxEdJ5CBmE+N5RiBYJqvYA="
		},
		"dns-prefetch-control": {
			"version": "0.2.0",
			"resolved": "https://registry.npmjs.org/dns-prefetch-control/-/dns-prefetch-control-0.2.0.tgz",
			"integrity": "sha512-hvSnros73+qyZXhHFjx2CMLwoj3Fe7eR9EJsFsqmcI1bB2OBWL/+0YzaEaKssCHnj/6crawNnUyw74Gm2EKe+Q=="
		},
		"dont-sniff-mimetype": {
			"version": "1.1.0",
			"resolved": "https://registry.npmjs.org/dont-sniff-mimetype/-/dont-sniff-mimetype-1.1.0.tgz",
			"integrity": "sha512-ZjI4zqTaxveH2/tTlzS1wFp+7ncxNZaIEWYg3lzZRHkKf5zPT/MnEG6WL0BhHMJUabkh8GeU5NL5j+rEUCb7Ug=="
		},
		"ee-first": {
			"version": "1.1.1",
			"resolved": "https://registry.npmjs.org/ee-first/-/ee-first-1.1.1.tgz",
			"integrity": "sha1-WQxhFWsK4vTwJVcyoViyZrxWsh0="
		},
		"encodeurl": {
			"version": "1.0.2",
			"resolved": "https://registry.npmjs.org/encodeurl/-/encodeurl-1.0.2.tgz",
			"integrity": "sha1-rT/0yG7C0CkyL1oCw6mmBslbP1k="
		},
		"escape-html": {
			"version": "1.0.3",
			"resolved": "https://registry.npmjs.org/escape-html/-/escape-html-1.0.3.tgz",
			"integrity": "sha1-Aljq5NPQwJdN4cFpGI7wBR0dGYg="
		},
		"etag": {
			"version": "1.8.1",
			"resolved": "https://registry.npmjs.org/etag/-/etag-1.8.1.tgz",
			"integrity": "sha1-Qa4u62XvpiJorr/qg6x9eSmbCIc="
		},
		"expect-ct": {
			"version": "0.2.0",
			"resolved": "https://registry.npmjs.org/expect-ct/-/expect-ct-0.2.0.tgz",
			"integrity": "sha512-6SK3MG/Bbhm8MsgyJAylg+ucIOU71/FzyFalcfu5nY19dH8y/z0tBJU0wrNBXD4B27EoQtqPF/9wqH0iYAd04g=="
		},
		"express": {
			"version": "4.17.1",
			"resolved": "https://registry.npmjs.org/express/-/express-4.17.1.tgz",
			"integrity": "sha512-mHJ9O79RqluphRrcw2X/GTh3k9tVv8YcoyY4Kkh4WDMUYKRZUq0h1o0w2rrrxBqM7VoeUVqgb27xlEMXTnYt4g==",
			"requires": {
				"accepts": "~1.3.7",
				"array-flatten": "1.1.1",
				"body-parser": "1.19.0",
				"content-disposition": "0.5.3",
				"content-type": "~1.0.4",
				"cookie": "0.4.0",
				"cookie-signature": "1.0.6",
				"debug": "2.6.9",
				"depd": "~1.1.2",
				"encodeurl": "~1.0.2",
				"escape-html": "~1.0.3",
				"etag": "~1.8.1",
				"finalhandler": "~1.1.2",
				"fresh": "0.5.2",
				"merge-descriptors": "1.0.1",
				"methods": "~1.1.2",
				"on-finished": "~2.3.0",
				"parseurl": "~1.3.3",
				"path-to-regexp": "0.1.7",
				"proxy-addr": "~2.0.5",
				"qs": "6.7.0",
				"range-parser": "~1.2.1",
				"safe-buffer": "5.1.2",
				"send": "0.17.1",
				"serve-static": "1.14.1",
				"setprototypeof": "1.1.1",
				"statuses": "~1.5.0",
				"type-is": "~1.6.18",
				"utils-merge": "1.0.1",
				"vary": "~1.1.2"
			}
		},
		"feature-policy": {
			"version": "0.3.0",
			"resolved": "https://registry.npmjs.org/feature-policy/-/feature-policy-0.3.0.tgz",
			"integrity": "sha512-ZtijOTFN7TzCujt1fnNhfWPFPSHeZkesff9AXZj+UEjYBynWNUIYpC87Ve4wHzyexQsImicLu7WsC2LHq7/xrQ=="
		},
		"finalhandler": {
			"version": "1.1.2",
			"resolved": "https://registry.npmjs.org/finalhandler/-/finalhandler-1.1.2.tgz",
			"integrity": "sha512-aAWcW57uxVNrQZqFXjITpW3sIUQmHGG3qSb9mUah9MgMC4NeWhNOlNjXEYq3HjRAvL6arUviZGGJsBg6z0zsWA==",
			"requires": {
				"debug": "2.6.9",
				"encodeurl": "~1.0.2",
				"escape-html": "~1.0.3",
				"on-finished": "~2.3.0",
				"parseurl": "~1.3.3",
				"statuses": "~1.5.0",
				"unpipe": "~1.0.0"
			}
		},
		"forwarded": {
			"version": "0.1.2",
			"resolved": "https://registry.npmjs.org/forwarded/-/forwarded-0.1.2.tgz",
			"integrity": "sha1-mMI9qxF1ZXuMBXPozszZGw/xjIQ="
		},
		"frameguard": {
			"version": "3.1.0",
			"resolved": "https://registry.npmjs.org/frameguard/-/frameguard-3.1.0.tgz",
			"integrity": "sha512-TxgSKM+7LTA6sidjOiSZK9wxY0ffMPY3Wta//MqwmX0nZuEHc8QrkV8Fh3ZhMJeiH+Uyh/tcaarImRy8u77O7g=="
		},
		"fresh": {
			"version": "0.5.2",
			"resolved": "https://registry.npmjs.org/fresh/-/fresh-0.5.2.tgz",
			"integrity": "sha1-PYyt2Q2XZWn6g1qx+OSyOhBWBac="
		},
		"helmet": {
			"version": "3.21.3",
			"resolved": "https://registry.npmjs.org/helmet/-/helmet-3.21.3.tgz",
			"integrity": "sha512-8OjGNdpG3WQhPO71fSy2fT4X3FSNutU1LDeAf+YS+Vil6r+fE7w8per5mNed6egGYbZl3QhKXgFzMYSwys+YQw==",
			"requires": {
				"depd": "2.0.0",
				"dns-prefetch-control": "0.2.0",
				"dont-sniff-mimetype": "1.1.0",
				"expect-ct": "0.2.0",
				"feature-policy": "0.3.0",
				"frameguard": "3.1.0",
				"helmet-crossdomain": "0.4.0",
				"helmet-csp": "2.9.5",
				"hide-powered-by": "1.1.0",
				"hpkp": "2.0.0",
				"hsts": "2.2.0",
				"ienoopen": "1.1.0",
				"nocache": "2.1.0",
				"referrer-policy": "1.2.0",
				"x-xss-protection": "1.3.0"
			},
			"dependencies": {
				"depd": {
					"version": "2.0.0",
					"resolved": "https://registry.npmjs.org/depd/-/depd-2.0.0.tgz",
					"integrity": "sha512-g7nH6P6dyDioJogAAGprGpCtVImJhpPk/roCzdb3fIh61/s/nPsfR6onyMwkCAR/OlC3yBC0lESvUoQEAssIrw=="
				}
			}
		},
		"helmet-crossdomain": {
			"version": "0.4.0",
			"resolved": "https://registry.npmjs.org/helmet-crossdomain/-/helmet-crossdomain-0.4.0.tgz",
			"integrity": "sha512-AB4DTykRw3HCOxovD1nPR16hllrVImeFp5VBV9/twj66lJ2nU75DP8FPL0/Jp4jj79JhTfG+pFI2MD02kWJ+fA=="
		},
		"helmet-csp": {
			"version": "2.9.5",
			"resolved": "https://registry.npmjs.org/helmet-csp/-/helmet-csp-2.9.5.tgz",
			"integrity": "sha512-w9nps5adqFQwgktVPDbXkARmZot/nr8aegzQas9AXdBSwBFBBefPpDSTV0wtgHlAUdDwY6MZo7qAl9yts3ppJg==",
			"requires": {
				"bowser": "2.9.0",
				"camelize": "1.0.0",
				"content-security-policy-builder": "2.1.0",
				"dasherize": "2.0.0"
			}
		},
		"hide-powered-by": {
			"version": "1.1.0",
			"resolved": "https://registry.npmjs.org/hide-powered-by/-/hide-powered-by-1.1.0.tgz",
			"integrity": "sha512-Io1zA2yOA1YJslkr+AJlWSf2yWFkKjvkcL9Ni1XSUqnGLr/qRQe2UI3Cn/J9MsJht7yEVCe0SscY1HgVMujbgg=="
		},
		"hpkp": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/hpkp/-/hpkp-2.0.0.tgz",
			"integrity": "sha512-TaZpC6cO/k3DFsjfzz1LnOobbVSq+J+7WpJxrVtN4L+8+BPQj8iBDRB2Dx49613N+e7/+ZSQ9ra+xZm7Blf4wg=="
		},
		"hsts": {
			"version": "2.2.0",
			"resolved": "https://registry.npmjs.org/hsts/-/hsts-2.2.0.tgz",
			"integrity": "sha512-ToaTnQ2TbJkochoVcdXYm4HOCliNozlviNsg+X2XQLQvZNI/kCHR9rZxVYpJB3UPcHz80PgxRyWQ7PdU1r+VBQ==",
			"requires": {
				"depd": "2.0.0"
			},
			"dependencies": {
				"depd": {
					"version": "2.0.0",
					"resolved": "https://registry.npmjs.org/depd/-/depd-2.0.0.tgz",
					"integrity": "sha512-g7nH6P6dyDioJogAAGprGpCtVImJhpPk/roCzdb3fIh61/s/nPsfR6onyMwkCAR/OlC3yBC0lESvUoQEAssIrw=="
				}
			}
		},
		"http-errors": {
			"version": "1.7.2",
			"resolved": "https://registry.npmjs.org/http-errors/-/http-errors-1.7.2.tgz",
			"integrity": "sha512-uUQBt3H/cSIVfch6i1EuPNy/YsRSOUBXTVfZ+yR7Zjez3qjBz6i9+i4zjNaoqcoFVI4lQJ5plg63TvGfRSDCRg==",
			"requires": {
				"depd": "~1.1.2",
				"inherits": "2.0.3",
				"setprototypeof": "1.1.1",
				"statuses": ">= 1.5.0 < 2",
				"toidentifier": "1.0.0"
			}
		},
		"iconv-lite": {
			"version": "0.4.24",
			"resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.4.24.tgz",
			"integrity": "sha512-v3MXnZAcvnywkTUEZomIActle7RXXeedOR31wwl7VlyoXO4Qi9arvSenNQWne1TcRwhCL1HwLI21bEqdpj8/rA==",
			"requires": {
				"safer-buffer": ">= 2.1.2 < 3"
			}
		},
		"ienoopen": {
			"version": "1.1.0",
			"resolved": "https://registry.npmjs.org/ienoopen/-/ienoopen-1.1.0.tgz",
			"integrity": "sha512-MFs36e/ca6ohEKtinTJ5VvAJ6oDRAYFdYXweUnGY9L9vcoqFOU4n2ZhmJ0C4z/cwGZ3YIQRSB3XZ1+ghZkY5NQ=="
		},
		"inherits": {
			"version": "2.0.3",
			"resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.3.tgz",
			"integrity": "sha1-Yzwsg+PaQqUC9SRmAiSA9CCCYd4="
		},
		"ipaddr.js": {
			"version": "1.9.1",
			"resolved": "https://registry.npmjs.org/ipaddr.js/-/ipaddr.js-1.9.1.tgz",
			"integrity": "sha512-0KI/607xoxSToH7GjN1FfSbLoU0+btTicjsQSWQlh/hZykN8KpmMf7uYwPW3R+akZ6R/w18ZlXSHBYXiYUPO3g=="
		},
		"media-typer": {
			"version": "0.3.0",
			"resolved": "https://registry.npmjs.org/media-typer/-/media-typer-0.3.0.tgz",
			"integrity": "sha1-hxDXrwqmJvj/+hzgAWhUUmMlV0g="
		},
		"merge-descriptors": {
			"version": "1.0.1",
			"resolved": "https://registry.npmjs.org/merge-descriptors/-/merge-descriptors-1.0.1.tgz",
			"integrity": "sha1-sAqqVW3YtEVoFQ7J0blT8/kMu2E="
		},
		"methods": {
			"version": "1.1.2",
			"resolved": "https://registry.npmjs.org/methods/-/methods-1.1.2.tgz",
			"integrity": "sha1-VSmk1nZUE07cxSZmVoNbD4Ua/O4="
		},
		"mime": {
			"version": "1.6.0",
			"resolved": "https://registry.npmjs.org/mime/-/mime-1.6.0.tgz",
			"integrity": "sha512-x0Vn8spI+wuJ1O6S7gnbaQg8Pxh4NNHb7KSINmEWKiPE4RKOplvijn+NkmYmmRgP68mc70j2EbeTFRsrswaQeg=="
		},
		"mime-db": {
			"version": "1.44.0",
			"resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.44.0.tgz",
			"integrity": "sha512-/NOTfLrsPBVeH7YtFPgsVWveuL+4SjjYxaQ1xtM1KMFj7HdxlBlxeyNLzhyJVx7r4rZGJAZ/6lkKCitSc/Nmpg=="
		},
		"mime-types": {
			"version": "2.1.27",
			"resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.27.tgz",
			"integrity": "sha512-JIhqnCasI9yD+SsmkquHBxTSEuZdQX5BuQnS2Vc7puQQQ+8yiP5AY5uWhpdv4YL4VM5c6iliiYWPgJ/nJQLp7w==",
			"requires": {
				"mime-db": "1.44.0"
			}
		},
		"ms": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
			"integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g="
		},
		"negotiator": {
			"version": "0.6.2",
			"resolved": "https://registry.npmjs.org/negotiator/-/negotiator-0.6.2.tgz",
			"integrity": "sha512-hZXc7K2e+PgeI1eDBe/10Ard4ekbfrrqG8Ep+8Jmf4JID2bNg7NvCPOZN+kfF574pFQI7mum2AUqDidoKqcTOw=="
		},
		"nocache": {
			"version": "2.1.0",
			"resolved": "https://registry.npmjs.org/nocache/-/nocache-2.1.0.tgz",
			"integrity": "sha512-0L9FvHG3nfnnmaEQPjT9xhfN4ISk0A8/2j4M37Np4mcDesJjHgEUfgPhdCyZuFI954tjokaIj/A3NdpFNdEh4Q=="
		},
		"on-finished": {
			"version": "2.3.0",
			"resolved": "https://registry.npmjs.org/on-finished/-/on-finished-2.3.0.tgz",
			"integrity": "sha1-IPEzZIGwg811M3mSoWlxqi2QaUc=",
			"requires": {
				"ee-first": "1.1.1"
			}
		},
		"parseurl": {
			"version": "1.3.3",
			"resolved": "https://registry.npmjs.org/parseurl/-/parseurl-1.3.3.tgz",
			"integrity": "sha512-CiyeOxFT/JZyN5m0z9PfXw4SCBJ6Sygz1Dpl0wqjlhDEGGBP1GnsUVEL0p63hoG1fcj3fHynXi9NYO4nWOL+qQ=="
		},
		"path-to-regexp": {
			"version": "0.1.7",
			"resolved": "https://registry.npmjs.org/path-to-regexp/-/path-to-regexp-0.1.7.tgz",
			"integrity": "sha1-32BBeABfUi8V60SQ5yR6G/qmf4w="
		},
		"proxy-addr": {
			"version": "2.0.6",
			"resolved": "https://registry.npmjs.org/proxy-addr/-/proxy-addr-2.0.6.tgz",
			"integrity": "sha512-dh/frvCBVmSsDYzw6n926jv974gddhkFPfiN8hPOi30Wax25QZyZEGveluCgliBnqmuM+UJmBErbAUFIoDbjOw==",
			"requires": {
				"forwarded": "~0.1.2",
				"ipaddr.js": "1.9.1"
			}
		},
		"qs": {
			"version": "6.7.0",
			"resolved": "https://registry.npmjs.org/qs/-/qs-6.7.0.tgz",
			"integrity": "sha512-VCdBRNFTX1fyE7Nb6FYoURo/SPe62QCaAyzJvUjwRaIsc+NePBEniHlvxFmmX56+HZphIGtV0XeCirBtpDrTyQ=="
		},
		"range-parser": {
			"version": "1.2.1",
			"resolved": "https://registry.npmjs.org/range-parser/-/range-parser-1.2.1.tgz",
			"integrity": "sha512-Hrgsx+orqoygnmhFbKaHE6c296J+HTAQXoxEF6gNupROmmGJRoyzfG3ccAveqCBrwr/2yxQ5BVd/GTl5agOwSg=="
		},
		"raw-body": {
			"version": "2.4.0",
			"resolved": "https://registry.npmjs.org/raw-body/-/raw-body-2.4.0.tgz",
			"integrity": "sha512-4Oz8DUIwdvoa5qMJelxipzi/iJIi40O5cGV1wNYp5hvZP8ZN0T+jiNkL0QepXs+EsQ9XJ8ipEDoiH70ySUJP3Q==",
			"requires": {
				"bytes": "3.1.0",
				"http-errors": "1.7.2",
				"iconv-lite": "0.4.24",
				"unpipe": "1.0.0"
			}
		},
		"referrer-policy": {
			"version": "1.2.0",
			"resolved": "https://registry.npmjs.org/referrer-policy/-/referrer-policy-1.2.0.tgz",
			"integrity": "sha512-LgQJIuS6nAy1Jd88DCQRemyE3mS+ispwlqMk3b0yjZ257fI1v9c+/p6SD5gP5FGyXUIgrNOAfmyioHwZtYv2VA=="
		},
		"safe-buffer": {
			"version": "5.1.2",
			"resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.1.2.tgz",
			"integrity": "sha512-Gd2UZBJDkXlY7GbJxfsE8/nvKkUEU1G38c1siN6QP6a9PT9MmHB8GnpscSmMJSoF8LOIrt8ud/wPtojys4G6+g=="
		},
		"safer-buffer": {
			"version": "2.1.2",
			"resolved": "https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz",
			"integrity": "sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg=="
		},
		"send": {
			"version": "0.17.1",
			"resolved": "https://registry.npmjs.org/send/-/send-0.17.1.tgz",
			"integrity": "sha512-BsVKsiGcQMFwT8UxypobUKyv7irCNRHk1T0G680vk88yf6LBByGcZJOTJCrTP2xVN6yI+XjPJcNuE3V4fT9sAg==",
			"requires": {
				"debug": "2.6.9",
				"depd": "~1.1.2",
				"destroy": "~1.0.4",
				"encodeurl": "~1.0.2",
				"escape-html": "~1.0.3",
				"etag": "~1.8.1",
				"fresh": "0.5.2",
				"http-errors": "~1.7.2",
				"mime": "1.6.0",
				"ms": "2.1.1",
				"on-finished": "~2.3.0",
				"range-parser": "~1.2.1",
				"statuses": "~1.5.0"
			},
			"dependencies": {
				"ms": {
					"version": "2.1.1",
					"resolved": "https://registry.npmjs.org/ms/-/ms-2.1.1.tgz",
					"integrity": "sha512-tgp+dl5cGk28utYktBsrFqA7HKgrhgPsg6Z/EfhWI4gl1Hwq8B/GmY/0oXZ6nF8hDVesS/FpnYaD/kOWhYQvyg=="
				}
			}
		},
		"serve-static": {
			"version": "1.14.1",
			"resolved": "https://registry.npmjs.org/serve-static/-/serve-static-1.14.1.tgz",
			"integrity": "sha512-JMrvUwE54emCYWlTI+hGrGv5I8dEwmco/00EvkzIIsR7MqrHonbD9pO2MOfFnpFntl7ecpZs+3mW+XbQZu9QCg==",
			"requires": {
				"encodeurl": "~1.0.2",
				"escape-html": "~1.0.3",
				"parseurl": "~1.3.3",
				"send": "0.17.1"
			}
		},
		"setprototypeof": {
			"version": "1.1.1",
			"resolved": "https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.1.1.tgz",
			"integrity": "sha512-JvdAWfbXeIGaZ9cILp38HntZSFSo3mWg6xGcJJsd+d4aRMOqauag1C63dJfDw7OaMYwEbHMOxEZ1lqVRYP2OAw=="
		},
		"statuses": {
			"version": "1.5.0",
			"resolved": "https://registry.npmjs.org/statuses/-/statuses-1.5.0.tgz",
			"integrity": "sha1-Fhx9rBd2Wf2YEfQ3cfqZOBR4Yow="
		},
		"toidentifier": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/toidentifier/-/toidentifier-1.0.0.tgz",
			"integrity": "sha512-yaOH/Pk/VEhBWWTlhI+qXxDFXlejDGcQipMlyxda9nthulaxLZUNcUqFxokp0vcYnvteJln5FNQDRrxj3YcbVw=="
		},
		"type-is": {
			"version": "1.6.18",
			"resolved": "https://registry.npmjs.org/type-is/-/type-is-1.6.18.tgz",
			"integrity": "sha512-TkRKr9sUTxEH8MdfuCSP7VizJyzRNMjj2J2do2Jr3Kym598JVdEksuzPQCnlFPW4ky9Q+iA+ma9BGm06XQBy8g==",
			"requires": {
				"media-typer": "0.3.0",
				"mime-types": "~2.1.24"
			}
		},
		"unpipe": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/unpipe/-/unpipe-1.0.0.tgz",
			"integrity": "sha1-sr9O6FFKrmFltIF4KdIbLvSZBOw="
		},
		"utils-merge": {
			"version": "1.0.1",
			"resolved": "https://registry.npmjs.org/utils-merge/-/utils-merge-1.0.1.tgz",
			"integrity": "sha1-n5VxD1CiZ5R7LMwSR0HBAoQn5xM="
		},
		"vary": {
			"version": "1.1.2",
			"resolved": "https://registry.npmjs.org/vary/-/vary-1.1.2.tgz",
			"integrity": "sha1-IpnwLG3tMNSllhsLn3RSShj2NPw="
		},
		"x-xss-protection": {
			"version": "1.3.0",
			"resolved": "https://registry.npmjs.org/x-xss-protection/-/x-xss-protection-1.3.0.tgz",
			"integrity": "sha512-kpyBI9TlVipZO4diReZMAHWtS0MMa/7Kgx8hwG/EuZLiA6sg4Ah/4TRdASHhRRN3boobzcYgFRUFSgHRge6Qhg=="
		}
	}
}
{
	"name": "fcc-infosec-challenges",
	"version": "0.0.1",
	"description": "fcc backend boilerplate",
	"main": "server.js",
	"scripts": {
		"start": "node myApp.js"
	},
	"dependencies": {
		"express": "^4.14.0",
		"helmet": "3.21.3"
	},
	"keywords": [
		"node",
		"hyperdev",
		"express",
		"freecodecamp"
	],
	"license": "MIT"
}
/********************************************
 * DO NOT EDIT THIS FILE
 * the verification process may break
 *******************************************/

var express = require("express");
var app = express();
app.disable("x-powered-by");
var fs = require("fs");
var path = require("path");

app.use(function (req, res, next) {
  res.set({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers":
      "Origin, X-Requested-With, content-type, Accept",
  });
  app.disable("x-powered-by");
  next();
});

app.get("/file/*?", function (req, res, next) {
  if (req.params[0] === ".env") {
    return next({ status: 401, message: "ACCESS DENIED" });
  }
  fs.readFile(path.join(__dirname, req.params[0]), function (err, data) {
    if (err) {
      return next(err);
    }
    res.type("txt").send(data.toString());
  });
});

var main = require("./myApp.js");
app.get("/app-info", function (req, res) {
  // list middlewares mounted on the '/' camper's app
  var appMainRouteStack = main._router.stack
    .filter((s) => s.path === "")
    .map((l) => l.name)
    // filter out express default middlewares
    .filter(
      (n) => !(n === "query" || n === "expressInit" || n === "serveStatic")
    );

  // filter out CORS Headers
  var hs = Object.keys(res.getHeaders()).filter(
    (h) => !h.match(/^access-control-\w+/)
  );
  var hObj = {};
  hs.forEach((h) => {
    hObj[h] = res.getHeaders()[h];
  });
  delete res.get("strict-transport-security");
  res.json({ headers: hObj, appStack: appMainRouteStack });
});

app.get("/package.json", function (req, res, next) {
  fs.readFile(__dirname + "/package.json", function (err, data) {
    if (err) return next(err);
    res.type("txt").send(data.toString());
  });
});

app.use(function (req, res, next) {
  res.status(404).type("txt").send("Not Found");
});

module.exports = app;

/********************************************
 * DO NOT EDIT THIS FILE
 * the verification process may break
 *******************************************/
   
 