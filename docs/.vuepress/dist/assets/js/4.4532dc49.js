(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{239:function(t,a,e){t.exports=e.p+"assets/img/image-20180628123448463.73c98873.png"},240:function(t,a,e){t.exports=e.p+"assets/img/image-20180628123556704.08640e82.png"},241:function(t,a,e){t.exports=e.p+"assets/img/image-20180628122441329.fa0f1010.png"},242:function(t,a,e){t.exports=e.p+"assets/img/image-20180628124151269.df557d32.png"},243:function(t,a,e){t.exports=e.p+"assets/img/image-20180628124248502.085fd7de.png"},244:function(t,a,e){t.exports=e.p+"assets/img/image-20180628124449686.12828631.png"},245:function(t,a,e){t.exports=e.p+"assets/img/image-20180810224729833.9ec08735.png"},256:function(t,a,e){"use strict";e.r(a);var n=e(0),s=Object(n.a)({},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"api"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#api","aria-hidden":"true"}},[t._v("#")]),t._v(" Api")]),t._v(" "),n("blockquote",[n("p",[t._v("创作不易，转载请注明出处： 后盾人 @ houdurnen.com")])]),t._v(" "),n("p",[t._v("REST是所有Web应用都应该遵守的架构设计指导原则。  Representational State Transfer，翻译是”表现层状态转化”。")]),t._v(" "),n("p",[t._v("面向资源是REST最明显的特征，对于同一个资源的一组不同的操作。资源是服务器上一个可命名的抽象概念，资源是以名词为核心来组织的，首先关注的是名词。REST要求，必须通过统一的接口来对资源执行各种操作。对于每个资源只能执行一组有限的操作。")]),t._v(" "),n("h3",{attrs:{id:"动作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#动作","aria-hidden":"true"}},[t._v("#")]),t._v(" 动作")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("GET （SELECT）：从服务器检索特定资源，或资源列表\nPOST （CREATE）：在服务器上创建一个新的资源\nPUT （UPDATE）：更新服务器上的资源，提供整个资源\nPATCH （UPDATE）：更新服务器上的资源，仅提供更改的属性\nDELETE （DELETE）：从服务器删除资源\n")])])]),n("h3",{attrs:{id:"命名"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#命名","aria-hidden":"true"}},[t._v("#")]),t._v(" 命名")]),t._v(" "),n("p",[t._v('路径又称"终点"（endpoint），表示API的具体网址。')]),t._v(" "),n("p",[t._v('在RESTful架构中，每个网址代表一种资源（resource），所以网址中不能有动词，只能有名词，而且所用的名词往往与数据库的表名对应。一般来说，数据库中的表都是同种记录的"集合"（collection），所以API中的名词也应该使用复数。')]),t._v(" "),n("p",[t._v("举例来说，有一个API提供动物园（zoo）的信息，还包括各种动物和雇员的信息，则它的路径应该设计成下面这样。")]),t._v(" "),n("p",[t._v("接口尽量使用名词，禁止使用动词，下面是一些例子。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("GET         /zoos：列出所有动物园\nPOST        /zoos：新建一个动物园\nGET         /zoos/ID：获取某个指定动物园的信息\nPUT         /zoos/ID：更新某个指定动物园的信息（提供该动物园的全部信息）\nPATCH       /zoos/ID：更新某个指定动物园的信息（提供该动物园的部分信息）\nDELETE      /zoos/ID：删除某个动物园\nGET         /zoos/ID/animals：列出某个指定动物园的所有动物\nDELETE      /zoos/ID/animals/ID：删除某个指定动物园的指定动物\n")])])]),n("p",[t._v("再比如，某个URI是/posts/show/1，其中show是动词，这个URI就设计错了，正确的写法应该是/posts/1，然后用GET方法表示show。")]),t._v(" "),n("h3",{attrs:{id:"版本"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#版本","aria-hidden":"true"}},[t._v("#")]),t._v(" 版本")]),t._v(" "),n("p",[t._v("应该将API的版本号放入URL。如：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("https://api.example.com/v1\n")])])]),n("h3",{attrs:{id:"过滤"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#过滤","aria-hidden":"true"}},[t._v("#")]),t._v(" 过滤")]),t._v(" "),n("p",[t._v("如果记录数量很多，服务器不可能都将它们返回给用户。API应该提供参数，过滤返回结果。\n下面是一些常见的参数。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("?limit=10：指定返回记录的数量\n?offset=10：指定返回记录的开始位置。\n?page_number=2&page_size=100：指定第几页，以及每页的记录数。\n?sortby=name&order=asc：指定返回结果按照哪个属性排序，以及排序顺序。\n?animal_type_id=1：指定筛选条件\n")])])]),n("h3",{attrs:{id:"状态码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#状态码","aria-hidden":"true"}},[t._v("#")]),t._v(" 状态码")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("200 OK - [GET]：服务器成功返回用户请求的数据，该操作是幂等的（Idempotent）。\n201 CREATED - [POST/PUT/PATCH]：用户新建或修改数据成功。\n202 Accepted - [*]：表示一个请求已经进入后台排队（异步任务）\n204 NO CONTENT - [DELETE]：用户删除数据成功。\n400 INVALID REQUEST - [POST/PUT/PATCH]：用户发出的请求有错误，服务器没有进行新建或修改数据的操作\n401 Unauthorized - [*]：表示用户没有权限（令牌、用户名、密码错误）。\n403 Forbidden - [*] 表示用户得到授权（与401错误相对），但是访问是被禁止的。\n404 NOT FOUND - [*]：用户发出的请求针对的是不存在的记录，服务器没有进行操作，该操作是幂等的。\n406 Not Acceptable - [GET]：用户请求的格式不可得（比如用户请求JSON格式，但是只有XML格式）。\n410 Gone -[GET]：用户请求的资源被永久删除，且不会再得到的。\n422 Unprocesable entity - [POST/PUT/PATCH] 当创建一个对象时，发生一个验证错误。\n429 Too Many Requests - 由于请求频次达到上限而被拒绝访问\n500 INTERNAL SERVER ERROR - [*]：服务器发生错误，用户将无法判断发出的请求是否成功。\n")])])]),n("h3",{attrs:{id:"响应格式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#响应格式","aria-hidden":"true"}},[t._v("#")]),t._v(" 响应格式")]),t._v(" "),n("p",[t._v("从可读性和通用性来讲 "),n("code",[t._v("JSON")]),t._v(" 是最好的响应数据格式，下面是一个错误消息响应数据结构。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("{   \n\t'message' => ':message',\n\t'errors' => ':errors',\n\t'code' => ':code',\n\t'status_code' => ':status_code',\n\t'debug' => ':debug'\n}\n")])])]),n("ul",[n("li",[t._v("message：表示在API调用失败的情况下详细的错误信息，这个信息可以由客户端直接呈现给用户")]),t._v(" "),n("li",[t._v("errors：参数具体错误，比如字段较对错误内容")]),t._v(" "),n("li",[t._v("code：自定义错误码")]),t._v(" "),n("li",[t._v("status_code：http状态码")]),t._v(" "),n("li",[t._v("debug：debug调试信息")])]),t._v(" "),n("blockquote",[n("p",[t._v("错误返回值根据情况进行删减")])]),t._v(" "),n("h2",{attrs:{id:"postman"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#postman","aria-hidden":"true"}},[t._v("#")]),t._v(" Postman")]),t._v(" "),n("p",[t._v("postman可以高效的测试和维护接口。https://www.getpostman.com/apps")]),t._v(" "),n("p",[n("img",{attrs:{src:e(239),alt:"image-20180628123448463"}})]),t._v(" "),n("p",[n("img",{attrs:{src:e(240),alt:"image-20180628123556704"}})]),t._v(" "),n("p",[t._v("使用 "),n("code",[t._v("postMan")]),t._v(" 工具测试结果")]),t._v(" "),n("p",[n("img",{attrs:{src:e(241),alt:"image-20180628122441329"}})]),t._v(" "),n("h3",{attrs:{id:"环境变量"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#环境变量","aria-hidden":"true"}},[t._v("#")]),t._v(" 环境变量")]),t._v(" "),n("p",[t._v("我们在本地和服务器上都想测试接口，可以将域名定义为环境变量，这样我们只要改变环境域名就会自动变化。")]),t._v(" "),n("p",[n("img",{attrs:{src:e(242),alt:"image-20180628124151269"}})]),t._v(" "),n("p",[n("img",{attrs:{src:e(243),alt:"image-20180628124248502"}})]),t._v(" "),n("p",[n("img",{attrs:{src:e(244),alt:"image-20180628124449686"}})]),t._v(" "),n("h2",{attrs:{id:"dingo"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dingo","aria-hidden":"true"}},[t._v("#")]),t._v(" Dingo")]),t._v(" "),n("p",[t._v("Dingo Api 是致力于提供给开发者一套工具，帮助你方便快捷的建造你自己的API。这个包的目标是保持尽可能的灵活，它并不能覆盖所有的情况，也不能解决所有的问题。")]),t._v(" "),n("p",[t._v("官网：https://github.com/dingo/api/")]),t._v(" "),n("p",[t._v("文档：https://github.com/dingo/api/wiki/Configuration")]),t._v(" "),n("h3",{attrs:{id:"安装组件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装组件","aria-hidden":"true"}},[t._v("#")]),t._v(" 安装组件")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("composer require dingo/api:2.0.0-alpha2\n")])])]),n("p",[t._v("执行下面命令生成配置文件 "),n("code",[t._v("/config/api.php")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("php artisan vendor:publish\n")])])]),n("h3",{attrs:{id:"配置说明"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置说明","aria-hidden":"true"}},[t._v("#")]),t._v(" 配置说明")]),t._v(" "),n("p",[t._v("配置统一定义在 "),n("code",[t._v("config/api.php")]),t._v(" 文档中")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("#接口围绕：[x]本地和私有环境 [prs]公司内部app使用 [vnd]公开接口\n'standardsTree' => env('API_STANDARDS_TREE', 'x')\n\n#项目名称\n'subtype' => env('API_SUBTYPE', 'hdcms')\n\n#Api前缀 通过 www.hdcms.com/api 来访问 API。\n'prefix' => env('API_PREFIX', 'api')\n\n#api域名\n'domain' => env('API_DOMAIN', 'api.hdcms.com'),\n\n#版本号\n'version' => env('API_VERSION', 'v1')\n\n#开发时开启DEBUG便于发现错误\n'debug' => env('API_DEBUG', false)\n")])])]),n("blockquote",[n("p",[t._v("prefix 与 domain 只能二选一")])]),t._v(" "),n("h3",{attrs:{id:"接口版本"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#接口版本","aria-hidden":"true"}},[t._v("#")]),t._v(" 接口版本")]),t._v(" "),n("p",[t._v("在 "),n("code",[t._v("routes/api.php")]),t._v(" 文件定义")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("$api = app(\\Dingo\\Api\\Routing\\Router::class);\n\n#默认配置指定的是v1版本，可以直接通过 {host}/api/version 访问到\n$api->version('v1', function ($api) {\n    $api->get('version', function () {\n        return 'v1';\n    });\n});\n\n#如果v2不是默认版本，需要设置请求头  \n#Accept: application/[配置项 standardsTree].[配置项 subtype].v2+json\n$api->version('v2', function ($api) {\n    $api->get('version', function () {\n        return 'v2';\n    });\n});\n")])])]),n("h3",{attrs:{id:"基础控制器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基础控制器","aria-hidden":"true"}},[t._v("#")]),t._v(" 基础控制器")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("php artisan make:controller Api/Controller\n")])])]),n("p",[t._v("修改内容如下")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("namespace App\\Http\\Controllers\\Api;\n\nuse Dingo\\Api\\Routing\\Helpers;\nuse Illuminate\\Http\\Request;\nuse App\\Http\\Controllers\\Controller as SysController;\n\nclass Controller extends SysController\n{\n    use Helpers;\n}\n")])])]),n("h3",{attrs:{id:"transformers"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#transformers","aria-hidden":"true"}},[t._v("#")]),t._v(" Transformers")]),t._v(" "),n("p",[t._v("Transformers 允许你便捷地、始终如一地将对象转换为一个数组。通过使用一个 transformer 你可以对整数和布尔值，包括分页结果和嵌套关系进行类型转换。")]),t._v(" "),n("h4",{attrs:{id:"基本使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基本使用","aria-hidden":"true"}},[t._v("#")]),t._v(" 基本使用")]),t._v(" "),n("p",[t._v("一个 "),n("strong",[t._v("transformer")]),t._v(" 是一个类，它会获取原始数据并将返回一个格式化之后的标准数组。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("namespace App\\Transformers;\n\nuse App\\User;\nuse League\\Fractal\\TransformerAbstract;\n\nclass UserTransformer extends TransformerAbstract\n{\n    public function transform(User $user)\n    {\n        return [\n            'id'   \t\t=> $user['id'],\n            'name' \t\t=> $user['name'],\n            'created_at'=> $user->created_at->toDateTimeString()\n        ];\n    }\n}\n")])])]),n("p",[n("strong",[t._v("返回单个数据")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("return $this->response->item(User::find(1),new UserTransformer());\n")])])]),n("p",[n("strong",[t._v("返回集合")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("return $this->response->collection(User::get(),new UserTransformer());\n")])])]),n("p",[n("strong",[t._v("分页数据")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("return $this->response->paginator(User::paginate(2),new UserTransformer());\n")])])]),n("h4",{attrs:{id:"include"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#include","aria-hidden":"true"}},[t._v("#")]),t._v(" include")]),t._v(" "),n("p",[t._v("获取文章时我们希望获取文章的栏目数据，include的特性就非常方便了。")]),t._v(" "),n("p",[t._v("下面是ContentTransformer中的定义，")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("class ContentTransformer extends TransformerAbstract\n{\n\t# 定义可以include可使用的字段\n    protected $availableIncludes = ['category'];\n\n    public function transform(Content $content)\n    {\n        return [\n            'id'   => $content['id'],\n            'name' => $content['title'],\n        ];\n    }\n\n    public function includeCategory(Content $content)\n    {\n        return $this->item($content->category,new CategoryTransformer());\n    }\n}\n")])])]),n("p",[t._v("当我们调用 "),n("code",[t._v("{host}/api/contents?include=category")]),t._v(" 接口时，栏目数据也一并会返回")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("return $this->response->paginator(Content::paginate(1),new ContentTransformer());\n")])])]),n("p",[t._v("返回结果如下")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('{\n    "data": [\n        {\n            "id": 1,\n            "name": "后盾人 人人做后盾",\n            "category": {\n                "data": {\n                    "id": 2,\n                    "name": "编程"\n                }\n            }\n        }\n    ],\n    "meta": {\n        "pagination": {\n            "total": 100,\n            "count": 1,\n            "per_page": 1,\n            "current_page": 1,\n            "total_pages": 100,\n            "links": {\n                "next": "http://xiang.houdunren.com/api/contents?page=2"\n            }\n        }\n    }\n}\n')])])]),n("h3",{attrs:{id:"响应结果"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#响应结果","aria-hidden":"true"}},[t._v("#")]),t._v(" 响应结果")]),t._v(" "),n("p",[n("strong",[t._v("设置响应状态码")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("return $this->response->array(User::get())->setStatusCode(200);\n")])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("return response()->json(['error' => 'Unauthorized'], 401);\n")])])]),n("p",[n("strong",[t._v("错误响应")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("// 一个自定义消息和状态码的普通错误。\nreturn $this->response->error('This is an error.', 404);\n\n// 一个没有找到资源的错误，第一个参数可以传递自定义消息。\nreturn $this->response->errorNotFound();\n\n// 一个 bad request 错误，第一个参数可以传递自定义消息。\nreturn $this->response->errorBadRequest();\n\n// 一个服务器拒绝错误，第一个参数可以传递自定义消息。\nreturn $this->response->errorForbidden();\n\n// 一个内部错误，第一个参数可以传递自定义消息。\nreturn $this->response->errorInternal();\n\n// 一个未认证错误，第一个参数可以传递自定义消息。\nreturn $this->response->errorUnauthorized('帐号或密码错误');\n")])])]),n("h3",{attrs:{id:"限制请求数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#限制请求数","aria-hidden":"true"}},[t._v("#")]),t._v(" 限制请求数")]),t._v(" "),n("p",[t._v("使用 "),n("code",[t._v("api.throttle")]),t._v("中间件结合 "),n("code",[t._v("limit、expires")]),t._v(" 参数可实现接口次数限制。下面是定义在 "),n("code",[t._v("routes/api.php")]),t._v(" 路由文件中的示例。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("$api->version('v1', ['namespace' => '\\App\\Api'], function ($api) {\n    $api->group(['middleware' => 'api.throttle', 'limit' => 2, 'expires' => 1], function ($api) {\n        $api->get('user', 'UserController@all');\n    });\n});\n")])])]),n("p",[t._v("限制1分钟只能访问2次。")]),t._v(" "),n("h3",{attrs:{id:"身份验证"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#身份验证","aria-hidden":"true"}},[t._v("#")]),t._v(" 身份验证")]),t._v(" "),n("p",[t._v("可以通过 "),n("code",[t._v("api.auth")]),t._v(" 路由中间件来启用路由或者路由群组的保护，我们使用下面讲解的jwt组件完成接口验证。")]),t._v(" "),n("p",[n("strong",[t._v("在所有的路由上启用")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("$api->version('v1', ['middleware' => 'api.auth'], function ($api) {\n    // 在这个版本群组下的所有路由将进行身份验证。\n});\n")])])]),n("p",[n("strong",[t._v("特定的路由上启用")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("$api->version('v1', function ($api) {\n    $api->get('user', ['middleware' => 'api.auth', function () {\n        // 这个路由将进行身份验证。\n    }]);\n\n    $api->get('posts', function () {\n        // 这个路由不会验证身份。\n    });\n});\n")])])]),n("p",[n("strong",[t._v("控制器上进行身份验证")])]),t._v(" "),n("p",[n("code",[t._v("Laravel")]),t._v("可以在控制器里启用中间件。您可以在构造函数里使用 "),n("code",[t._v("middleware")]),t._v(" 的方法。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("class UserController extends Illuminate\\Routing\\Controller\n{\n    use Helpers;\n\n    public function __construct()\n    {\n        $this->middleware('api.auth');\n\n        // 这个中间件只在  index  中启用\n        $this->middleware('api.auth', ['only' => ['index']]);\n    }\n...\n")])])]),n("h2",{attrs:{id:"jwt"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#jwt","aria-hidden":"true"}},[t._v("#")]),t._v(" Jwt")]),t._v(" "),n("p",[t._v("Jwt是高效简单的接口验证组件，使用非常广泛。")]),t._v(" "),n("p",[t._v("GitHub：https://github.com/tymondesigns/jwt-auth")]),t._v(" "),n("p",[t._v("Packagist：https://packagist.org/packages/tymon/jwt-auth")]),t._v(" "),n("p",[t._v("在线文档： http://jwt-auth.readthedocs.io/en/develop/quick-start/")]),t._v(" "),n("h3",{attrs:{id:"安装组件-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装组件-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 安装组件")]),t._v(" "),n("p",[t._v("目前2.0版本正在开发中还不可以正常使用，所以我们使用 1.0.0-rc.2。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("composer require tymon/jwt-auth:1.0.0-rc.2\n")])])]),n("p",[n("strong",[t._v("生成配置文件")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("php artisan vendor:publish\n")])])]),n("p",[n("strong",[t._v("生成密钥")])]),t._v(" "),n("p",[t._v("这是用来给你的token签名的钥匙，使用以下命令生成一个密钥:")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("php artisan jwt:secret\n")])])]),n("p",[t._v("这将用 "),n("code",[t._v("JWT_SECRET=foobar")]),t._v(" 更新.env文件")]),t._v(" "),n("h3",{attrs:{id:"配置说明-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置说明-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 配置说明")]),t._v(" "),n("p",[t._v("JWT配置文件是 "),n("code",[t._v("config/jwt.php")]),t._v("，下面有部分配置项进行说明：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("#令牌过期时间(单位分钟)，设置null为永不过期\n'ttl' => env('JWT_TTL', 60)\n\n#刷新令牌时间(单位分钟)，设置为null可永久随时刷新\n'refresh_ttl' => env('JWT_REFRESH_TTL', 20160)\n")])])]),n("h3",{attrs:{id:"更新用户模型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#更新用户模型","aria-hidden":"true"}},[t._v("#")]),t._v(" 更新用户模型")]),t._v(" "),n("p",[t._v("首先，您需要在用户模型上实现 "),n("code",[t._v("Tymon\\JWTAuth\\Contracts\\JWTSubject")]),t._v(" 契约，它要求您实现两个方法 "),n("code",[t._v("getJWTIdentifier()")]),t._v(" 和 "),n("code",[t._v("getJWTCustomClaims()")]),t._v("。")]),t._v(" "),n("p",[t._v("下面的示例应该能让您了解这可能是什么样子的。显然，您应该根据需要进行任何更改，以满足自己的需要。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("<?php\n\nnamespace App;\n\nuse Tymon\\JWTAuth\\Contracts\\JWTSubject;\nuse Illuminate\\Notifications\\Notifiable;\nuse Illuminate\\Foundation\\Auth\\User as Authenticatable;\n\nclass User extends Authenticatable implements JWTSubject\n{\n    use Notifiable;\n\n    /**\n     * 获取将存储在JWT主题声明中的标识符.\n     * 就是用户表主键 id\n     *\n     * @return mixed\n     */\n    public function getJWTIdentifier()\n    {\n        return $this->getKey();\n    }\n\n    /**\n     * 返回一个键值数组，其中包含要添加到JWT的任何自定义声明.\n     *\n     * @return array\n     */\n    public function getJWTCustomClaims()\n    {\n        return [];\n    }\n}\n")])])]),n("h3",{attrs:{id:"配置验证守卫"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置验证守卫","aria-hidden":"true"}},[t._v("#")]),t._v(" 配置验证守卫")]),t._v(" "),n("p",[t._v("修改 "),n("code",[t._v("config/auth.php")]),t._v(" 文件以使用jwt保护来为接口身份验证提供支持。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("'guards' => [\n\t'web' => [\n\t\t'driver' => 'session',\n\t\t'provider' => 'users',\n\t],\n\t'api' => [\n\t\t'driver' => 'jwt',\n\t\t'provider' => 'users',\n\t],\n]\n")])])]),n("p",[t._v("修改dingo配置文件 "),n("code",[t._v("config/api.php")]),t._v(" 文件中的身份验证提供者")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("'auth' => [\n\t'jwt' => \\Dingo\\Api\\Auth\\Provider\\JWT::class,\n],\n")])])]),n("h3",{attrs:{id:"验证操作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#验证操作","aria-hidden":"true"}},[t._v("#")]),t._v(" 验证操作")]),t._v(" "),n("p",[n("strong",[t._v("路由定义")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("$api = app(\\Dingo\\Api\\Routing\\Router::class);\n$api->version('v1', ['namespace' => 'App\\Http\\Controllers\\Api',], function ($api) {\n    $api->post('login', 'AuthController@login');\n    $api->get('logout', 'AuthController@logout');\n    $api->get('me', 'AuthController@me');\n});\n")])])]),n("p",[n("strong",[t._v("控制器定义")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("class AuthController extends Controller\n{\n    public function __construct()\n    {\n    \t// 除login外都需要验证\n        $this->middleware('auth:api', ['except' => ['login']]);\n    }\n\n    //登录获取token\n    public function login()\n    {\n        $credentials = request(['email', 'password']);\n\n        if (!$token = auth('api')->attempt($credentials)) {\n\t\t\treturn $this->response->errorUnauthorized('帐号或密码错误');\n        }\n\n        return $this->respondWithToken($token);\n    }\n\n    //获取用户资料\n    public function me()\n    {\n        return response()->json(auth('api')->user());\n    }\n\n    //销毁token\n    public function logout()\n    {\n        auth('api')->logout();\n\n        return response()->json(['message' => 'Successfully logged out']);\n    }\n\n    //刷新token\n    public function refresh()\n    {\n        return $this->respondWithToken(auth('api')->refresh());\n    }\n\n    //响应token\n    protected function respondWithToken($token)\n    {\n        return response()->json([\n            'access_token' => $token,\n            'token_type'   => 'bearer',\n            'expires_in'   => auth('api')->factory()->getTTL() * 60,\n        ]);\n    }\n}\n")])])]),n("h3",{attrs:{id:"使用令牌"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用令牌","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用令牌")]),t._v(" "),n("p",[t._v("当请求需要验证的api时必须带有token，下面是使用header头携带令牌数据")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("Authorization: Bearer 令牌数据\n")])])]),n("p",[t._v("在postman 工具中可以使用以下方式简化操作")]),t._v(" "),n("p",[n("img",{attrs:{src:e(245),alt:"image-20180810224729833"}})])])},[],!1,null,null,null);a.default=s.exports}}]);