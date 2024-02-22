# q-api

Base URLs:

* <a href="https://q-api-xi.vercel.app">测试环境: https://q-api-xi.vercel.app</a>

# user

## POST 注册用户

POST /user

> Body 请求参数

```json
{
  "name": "金洋2",
  "password": "7Pq2HLE2Z8ud",
  "email": "f.ivr@fxxekgpdps.cq",
  "organization": "华北"
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Content-Type|header|string| 是 ||none|
|authorization|header|string| 否 ||none|
|body|body|object| 否 ||none|
|» name|body|string| 是 | 用户名|none|
|» password|body|string| 是 | 密码|none|
|» email|body|string| 是 | 邮箱|none|
|» organization|body|string| 是 | 组织|none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## POST 登陆接口

POST /login

登陆成功后，请求其他接口时，需要在 headers 里需要添加 authorization 键，值为 ${Bearer 用户的token}。 验证登陆状态

> Body 请求参数

```json
{
  "name": "string",
  "password": "string"
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|authorization|header|string| 否 ||none|
|body|body|object| 否 ||none|
|» name|body|string| 是 | 用户名|none|
|» password|body|string| 是 | 密码|none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## GET 查询所有用户

GET /users

headers 里需要添加 authorization 键，值为 ${Bearer 用户的token}。 验证登陆状态
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoi5byg56eA5YWwIiwiaWF0IjoxNzA3MDQ4NzIzLCJleHAiOjE3MDcwNTIzMjN9.BBxnMqKjjnavCjKfcJMKCJpz2slEb2L6BoeVKN8DKQk

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|authorization|header|string| 否 ||none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

# questionnaireTemplate

## GET 查询所有模版

GET /questionnaireTemplates

> Body 请求参数

```json
{}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|authorization|header|string| 否 ||none|
|body|body|object| 否 ||none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## POST 添加问卷模版

POST /questionnaireTemplate

> Body 请求参数

```json
{
  "title": "都打回如青",
  "stauts": true,
  "operation": {
    "dateNumber": 2024,
    "dateString": "2024-02-08 23:17:38",
    "userId": "De915a2d-fbfF-f61B-Ea3b-5D1bdB729e2D",
    "userName": "沈艳"
  },
  "topic": [
    {
      "question": "特积真日民整在决置毛热元达六更状适。",
      "type": "打分",
      "grade": {
        "max": 64,
        "text": [
          "Ut"
        ]
      },
      "must": false,
      "options": [
        {
          "content": "式住圆千交",
          "allowAddReasonStatus": true
        }
      ]
    }
  ]
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|authorization|header|string| 否 ||none|
|body|body|object| 否 ||none|
|» title|body|string| 是 | 问卷标题|none|
|» stauts|body|boolean| 是 | 问卷状态|none|
|» operation|body|[event](#schemaevent)| 是 | 操作员|none|
|»» dateNumber|body|number| 是 | 日期毫秒|none|
|»» dateString|body|string| 是 | 日期|none|
|»» userId|body|string| 是 | 用户id|none|
|»» userName|body|string| 是 | 用户名|none|
|» topic|body|[[topic](#schematopic)]| 是 ||none|
|»» 题目|body|[topic](#schematopic)| 否 | 题目|none|
|»»» question|body|string| 是 | 题目|none|
|»»» type|body|string| 是 | 题目类型|none|
|»»» grade|body|[grade](#schemagrade)| 是 | 打分|none|
|»»»» max|body|number| 否 | 最大分数|none|
|»»»» text|body|[string]| 否 | 根据分数平均分配中文|none|
|»»»» value|body|number| 是 | 选择的分数或默认值|none|
|»»» must|body|boolean| 是 | 是否必选|none|
|»»» options|body|[[options](#schemaoptions)]| 是 ||none|
|»»»» 选项|body|[options](#schemaoptions)| 否 | 选项|none|
|»»»»» content|body|string| 是 | 选项内容|none|
|»»»»» allowAddReasonStatus|body|boolean| 否 | 选择此项后是否可以添加文字说明|none|

#### 枚举值

|属性|值|
|---|---|
|»»» type|单选|
|»»» type|多选|
|»»» type|问答|
|»»» type|打分|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## PATCH 删除问卷模版（只是改变问卷状态）

PATCH /questionnaireTemplate/{id}/status

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|id|path|string| 是 ||none|
|authorization|header|string| 否 ||none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## GET 根据 id 查询问卷模版

GET /questionnaireTemplates/{id}

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|id|path|string| 是 ||none|
|authorization|header|string| 否 ||none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## PUT 根据 id 更新模版

PUT /questionnaireTemplate/{id}

> Body 请求参数

```json
{
  "title": "油位类器作223233233",
  "status": true,
  "topic": {
    "question": "会北办报商说教即必解查军华研义中化育。",
    "type": "多选",
    "grade": {
      "max": 32,
      "text": [
        "enim"
      ]
    },
    "must": true,
    "options": [
      {
        "content": "族采国还区",
        "allowAddReasonStatus": true
      }
    ]
  },
  "operation": {
    "dateNumber": 2024,
    "dateString": "2024-02-05 10:24:09",
    "userId": "76132086-6Cb5-7e1c-FDA0-72AeeE51eBD4",
    "userName": "许桂英"
  }
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|id|path|string| 是 ||none|
|authorization|header|string| 否 ||none|
|body|body|object| 否 ||none|
|» title|body|string| 是 ||none|
|» status|body|boolean| 是 ||none|
|» topic|body|[topic](#schematopic)| 是 | 题目|none|
|»» question|body|string| 是 | 题目|none|
|»» type|body|string| 是 | 题目类型|none|
|»» grade|body|[grade](#schemagrade)| 是 | 打分|none|
|»»» max|body|number| 否 | 最大分数|none|
|»»» text|body|[string]| 否 | 根据分数平均分配中文|none|
|»»» value|body|number| 是 | 选择的分数或默认值|none|
|»» must|body|boolean| 是 | 是否必选|none|
|»» options|body|[[options](#schemaoptions)]| 是 ||none|
|»»» 选项|body|[options](#schemaoptions)| 否 | 选项|none|
|»»»» content|body|string| 是 | 选项内容|none|
|»»»» allowAddReasonStatus|body|boolean| 否 | 选择此项后是否可以添加文字说明|none|
|» operation|body|[event](#schemaevent)| 是 | 操作员|none|
|»» dateNumber|body|number| 是 | 日期毫秒|none|
|»» dateString|body|string| 是 | 日期|none|
|»» userId|body|string| 是 | 用户id|none|
|»» userName|body|string| 是 | 用户名|none|

#### 枚举值

|属性|值|
|---|---|
|»» type|单选|
|»» type|多选|
|»» type|问答|
|»» type|打分|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

# questionnaire

## POST 创建当期问卷

POST /questionnaire

> Body 请求参数

```json
{
  "title": "此段产儿",
  "status": true,
  "templateId": "65c0444262c631157409e47a",
  "operation": {
    "dateNumber": 2024,
    "dateString": "2024-02-10 02:16:56",
    "userId": "41674c2C-B19e-D31B-CE6e-a2d5DcbB2D3D",
    "userName": "金静"
  }
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|authorization|header|string| 否 ||none|
|body|body|object| 否 ||none|
|» title|body|string| 是 | 标题|none|
|» status|body|boolean| 是 | 打开/关闭 状态|none|
|» templateId|body|string¦null| 否 | 对应模版 id|none|
|» createTime|body|number| 否 | 创建时间|none|
|» operation|body|[event](#schemaevent)| 是 | 操作员|none|
|»» dateNumber|body|number| 是 | 日期毫秒|none|
|»» dateString|body|string| 是 | 日期|none|
|»» userId|body|string| 是 | 用户id|none|
|»» userName|body|string| 是 | 用户名|none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## GET 查询所有当期问卷

GET /questionnaires

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|authorization|header|string| 否 ||none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## GET 根据 id 查询当期问卷

GET /questionnaires/{id}

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|id|path|string| 是 ||none|
|authorization|header|string| 否 ||none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## GET 查询对应 templateId 状态为打开的当期问卷

GET /questionnaires/{templateId}/open

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|templateId|path|string| 是 ||none|
|authorization|header|string| 否 ||none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## PATCH 改变当期问卷状态（打开/关闭）

PATCH /questionnaire/{id}/status

> Body 请求参数

```json
{
  "status": false
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|id|path|string| 是 ||none|
|authorization|header|string| 否 ||none|
|body|body|object| 否 ||none|
|» status|body|string| 是 ||none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

# answer

## POST 新增答卷

POST /answer

> Body 请求参数

```json
{
  "templateId": "65c4f068db44cb89240fdda3",
  "questionnaireId": "65c4f35792ebf37e1d7486a9",
  "questionnaireTitle": "2月份问卷",
  "userName": "lucy",
  "status": false,
  "responding": [
    {
      "topicId": "65c4f068db44cb89240fdda4",
      "number": "5859",
      "question": "问题1",
      "selectId": [
        "65c4f068db44cb89240fdda5"
      ],
      "type": "评分",
      "additional": "又入成化史",
      "options": [
        {
          "content": "过东商例听严东",
          "allowAddReasonStatus": true
        }
      ],
      "text": "队战转象接变使今列布车高美少照数。际低专市米青东基之同青色格。界来极又相素政规件件斯二红红持并。离号越山领并变量下节克他或三时查验声。运下强去观空技与对角就太第群队进标。长观发克住达置门线况包会识步。",
      "grade": {
        "max": 30,
        "text": [
          "sint est"
        ],
        "value": 100
      },
      "must": false
    },
    {
      "topicId": "65c4f068db44cb89240fdda4",
      "number": "5859",
      "question": "问题2",
      "selectId": [
        "65c4f068db44cb89240fdda5"
      ],
      "type": "评分",
      "additional": "又入成化史",
      "options": [
        {
          "content": "过东商例听严东",
          "allowAddReasonStatus": true
        }
      ],
      "text": "队战转象接变使今列布车高美少照数。际低专市米青东基之同青色格。界来极又相素政规件件斯二红红持并。离号越山领并变量下节克他或三时查验声。运下强去观空技与对角就太第群队进标。长观发克住达置门线况包会识步。",
      "grade": {
        "max": 30,
        "text": [
          "sint est"
        ],
        "value": 100
      },
      "must": false
    }
  ],
  "createTime": 662695111787,
  "operation": {
    "dateNumber": 2024,
    "dateString": "2024-02-20 01:06:46",
    "userId": "65d38b3469a7352a8dac28e5",
    "userName": "姜芳2"
  }
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|authorization|header|string| 否 ||none|
|body|body|object| 否 ||none|
|» templateId|body|string| 是 | 对应模版id|objectId|
|» questionnaireId|body|string| 是 | 对应当期id|objectId|
|» questionnaireTitle|body|string| 是 | 当期问卷标题|none|
|» userName|body|string| 是 | 答卷人姓名|none|
|» status|body|boolean| 是 | 答卷问卷|none|
|» responding|body|[[topicAnswer](#schematopicanswer)]| 是 ||none|
|»» 答题选项|body|[topicAnswer](#schematopicanswer)| 否 | 答题选项|none|
|»»» topicId|body|string| 是 | 对应题目 id|objectId|
|»»» number|body|string| 是 | 题号|none|
|»»» question|body|string| 是 | 题目|none|
|»»» selectId|body|[string]| 是 | 选择的答案id|objectId|
|»»» type|body|string| 是 | 选项类别|单选，多选，评分，问答|
|»»» additional|body|string| 是 | 附加内容|none|
|»»» options|body|[[options](#schemaoptions)]| 是 ||none|
|»»»» 选项|body|[options](#schemaoptions)| 否 | 选项|none|
|»»»»» content|body|string| 是 | 选项内容|none|
|»»»»» allowAddReasonStatus|body|boolean| 否 | 选择此项后是否可以添加文字说明|none|
|»»» text|body|string| 是 | 简答题答案|none|
|»»» grade|body|[grade](#schemagrade)| 是 | 打分|none|
|»»»» max|body|number| 否 | 最大分数|none|
|»»»» text|body|[string]| 否 | 根据分数平均分配中文|none|
|»»»» value|body|number| 是 | 选择的分数或默认值|none|
|»»» must|body|boolean| 是 | 是否必填|none|
|» createTime|body|number| 是 | 创建时间|none|
|» operation|body|[event](#schemaevent)| 是 | 操作员|none|
|»» dateNumber|body|number| 是 | 日期毫秒|none|
|»» dateString|body|string| 是 | 日期|none|
|»» userId|body|string| 是 | 用户id|none|
|»» userName|body|string| 是 | 用户名|none|

#### 枚举值

|属性|值|
|---|---|
|»»» type|单选|
|»»» type|多选|
|»»» type|问答|
|»»» type|评分|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## GET 查询所有答卷

GET /answers

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|authorization|header|string| 否 ||none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## GET 根据答卷id查询答卷

GET /answers/{id}

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|id|path|string| 是 ||none|
|authorization|header|string| 否 ||none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## GET 查询某一期问卷下某个人的答卷

GET /answers/{id}/finished/{username}

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|id|path|string| 是 ||none|
|username|path|string| 是 ||none|
|authorization|header|string| 否 ||none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

# statistics

## GET 查询某一期问卷下的所有问卷的汇总结果

GET /statistics/group/{questionnaireId}

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|questionnaireId|path|string| 是 ||none|
|authorization|header|string| 否 ||none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

# 数据模型

<h2 id="tocS_answer">answer</h2>

<a id="schemaanswer"></a>
<a id="schema_answer"></a>
<a id="tocSanswer"></a>
<a id="tocsanswer"></a>

```json
{
  "templateId": "string",
  "questionnaireId": "string",
  "questionnaireTitle": "string",
  "userName": "string",
  "status": true,
  "responding": [
    {
      "topicId": "string",
      "number": "string",
      "question": "string",
      "selectId": [
        "string"
      ],
      "type": "单选",
      "additional": "string",
      "options": [
        {
          "content": "string",
          "allowAddReasonStatus": true
        }
      ],
      "text": "string",
      "grade": {
        "max": 0,
        "text": [
          "string"
        ],
        "value": 0
      },
      "must": true
    }
  ],
  "createTime": 0,
  "operation": {
    "dateNumber": 0,
    "dateString": "string",
    "userId": "string",
    "userName": "string"
  }
}

```

答卷模型

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|templateId|string|true|none|对应模版id|objectId|
|questionnaireId|string|true|none|对应当期id|objectId|
|questionnaireTitle|string|true|none|当期问卷标题|none|
|userName|string|true|none|答卷人姓名|none|
|status|boolean|true|none|答卷问卷|none|
|responding|[[topicAnswer](#schematopicanswer)]|true|none||none|
|createTime|number|true|none|创建时间|none|
|operation|[event](#schemaevent)|true|none||none|

<h2 id="tocS_questionnaire">questionnaire</h2>

<a id="schemaquestionnaire"></a>
<a id="schema_questionnaire"></a>
<a id="tocSquestionnaire"></a>
<a id="tocsquestionnaire"></a>

```json
{
  "title": "string",
  "status": true,
  "templateId": "string",
  "createTime": 0,
  "operation": {
    "dateNumber": 0,
    "dateString": "string",
    "userId": "string",
    "userName": "string"
  }
}

```

当期问卷模型

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|title|string|true|none|标题|none|
|status|boolean|true|none|打开/关闭 状态|none|
|templateId|string¦null|false|none|对应模版 id|none|
|createTime|number|false|read-only|创建时间|none|
|operation|[event](#schemaevent)|true|none||none|

<h2 id="tocS_questionnaireTemplate">questionnaireTemplate</h2>

<a id="schemaquestionnairetemplate"></a>
<a id="schema_questionnaireTemplate"></a>
<a id="tocSquestionnairetemplate"></a>
<a id="tocsquestionnairetemplate"></a>

```json
{
  "title": "string",
  "stauts": true,
  "operation": {
    "dateNumber": 0,
    "dateString": "string",
    "userId": "string",
    "userName": "string"
  },
  "topic": [
    {
      "question": "string",
      "type": "单选",
      "grade": {
        "max": 0,
        "text": [
          "string"
        ],
        "value": 0
      },
      "must": true,
      "options": [
        {
          "content": "string",
          "allowAddReasonStatus": true
        }
      ]
    }
  ]
}

```

问卷模版模型

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|title|string|true|none|问卷标题|none|
|stauts|boolean|true|none|问卷状态|none|
|operation|[event](#schemaevent)|true|none||none|
|topic|[[topic](#schematopic)]|true|none||none|

<h2 id="tocS_topic">topic</h2>

<a id="schematopic"></a>
<a id="schema_topic"></a>
<a id="tocStopic"></a>
<a id="tocstopic"></a>

```json
{
  "question": "string",
  "type": "单选",
  "grade": {
    "max": 0,
    "text": [
      "string"
    ],
    "value": 0
  },
  "must": true,
  "options": [
    {
      "content": "string",
      "allowAddReasonStatus": true
    }
  ]
}

```

题目

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|question|string|true|none|题目|none|
|type|string|true|none|题目类型|none|
|grade|[grade](#schemagrade)|true|none||none|
|must|boolean|true|none|是否必选|none|
|options|[[options](#schemaoptions)]|true|none||none|

#### 枚举值

|属性|值|
|---|---|
|type|单选|
|type|多选|
|type|问答|
|type|打分|

<h2 id="tocS_grade">grade</h2>

<a id="schemagrade"></a>
<a id="schema_grade"></a>
<a id="tocSgrade"></a>
<a id="tocsgrade"></a>

```json
{
  "max": 0,
  "text": [
    "string"
  ],
  "value": 0
}

```

打分

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|max|number|false|none|最大分数|none|
|text|[string]|false|none|根据分数平均分配中文|none|
|value|number|true|none|选择的分数或默认值|none|

<h2 id="tocS_options">options</h2>

<a id="schemaoptions"></a>
<a id="schema_options"></a>
<a id="tocSoptions"></a>
<a id="tocsoptions"></a>

```json
{
  "content": "string",
  "allowAddReasonStatus": true
}

```

选项

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|content|string|true|none|选项内容|none|
|allowAddReasonStatus|boolean|false|none|选择此项后是否可以添加文字说明|none|

<h2 id="tocS_topicAnswer">topicAnswer</h2>

<a id="schematopicanswer"></a>
<a id="schema_topicAnswer"></a>
<a id="tocStopicanswer"></a>
<a id="tocstopicanswer"></a>

```json
{
  "topicId": "string",
  "number": "string",
  "question": "string",
  "selectId": [
    "string"
  ],
  "type": "单选",
  "additional": "string",
  "options": [
    {
      "content": "string",
      "allowAddReasonStatus": true
    }
  ],
  "text": "string",
  "grade": {
    "max": 0,
    "text": [
      "string"
    ],
    "value": 0
  },
  "must": true
}

```

答题选项

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|topicId|string|true|none|对应题目 id|objectId|
|number|string|true|none|题号|none|
|question|string|true|none|题目|none|
|selectId|[string]|true|none|选择的答案id|objectId|
|type|string|true|none|选项类别|单选，多选，评分，问答|
|additional|string|true|none|附加内容|none|
|options|[[options](#schemaoptions)]|true|none||none|
|text|string|true|none|简答题答案|none|
|grade|[grade](#schemagrade)|true|none||none|
|must|boolean|true|none|是否必填|none|

#### 枚举值

|属性|值|
|---|---|
|type|单选|
|type|多选|
|type|问答|
|type|评分|

<h2 id="tocS_event">event</h2>

<a id="schemaevent"></a>
<a id="schema_event"></a>
<a id="tocSevent"></a>
<a id="tocsevent"></a>

```json
{
  "dateNumber": 0,
  "dateString": "string",
  "userId": "string",
  "userName": "string"
}

```

操作员

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|dateNumber|number|true|none|日期毫秒|none|
|dateString|string|true|none|日期|none|
|userId|string|true|none|用户id|none|
|userName|string|true|none|用户名|none|

