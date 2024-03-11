// 提供前端测试用

const { sendSuccess } = require('../../utils/responseHandler')

const users = [
  {
    "operation": {
        "dateNumber": 1707404554741,
        "dateString": "2024-02-08"
    },
    "_id": "15d38b3469a7352a8dac28e1",
    "name": "金洋",
    "password": "$2a$10$V23423434PHsWewFTUsOkMvn45d9w9CmE1r0EU/VVVrG.JDKKxC",
    "email": "f.ivr@fxxekgpdps.cq",
    "organization": "华北"
  },
  {
      "operation": {
          "dateNumber": 1708362544328,
          "dateString": "2024-02-20"
      },
      "_id": "24d38b3469a7352a8dac28e2",
      "name": "阎勇",
      "password": "$2a$10$NTsEnqq2343HYqG2s.tBBeWrw31Ca8343DzbhiKkfp3pOSFCTp5G",
      "email": "p.ifcgvvjb@dnwy.th",
      "organization": "华南"
  },
  {
      "operation": {
          "dateNumber": 1710144211216,
          "dateString": "2024-03-11"
      },
      "_id": "34d38b3469a7352a8dac28e3",
      "name": "刘桂英",
      "password": "$2a$10$n.Nkh6w2ehqRhWxtuL9jyv1S234234Mszs/Fg7zlAAxHsOq0EvrIYC",
      "email": "m.gojn@yvqbdvc.et",
      "organization": "华南"
  }
]

app.get('/test/users', (req, res) => {
  sendSuccess(res, users)
})