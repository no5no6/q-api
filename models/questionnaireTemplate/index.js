

const options = {
  name: String,
  content: String,
  allowAddReasonStatus: {type: Boolean, default: false} // 某一项选择中是否可以用户选择后添加文字说明
}

const gradeSchema = {
  step: Number,
  begin: Number,
  end: Number,
  type: String
}

gradeSchema = new Schema(gradeSchema, {versionKey: false});


var topicSchema = {
  options,
  number: Number,
  question: String,
  type: {type: String, default: '单选', enum: ['单选', '多选', '问答', '打分']},
  // allowAddGrade: {type: Boolean, default: false}, // 是否添加打分
  grade: gradeSchema,
  must: {type: Boolean, default: true}, // 是否必填项
}