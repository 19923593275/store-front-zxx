<template>
    <div id="zxx">
        <div class="login-module">
            <el-row>
                <el-col :span="12" class="login-left">
                    1
                </el-col>
                <el-col :span="12" class="login-right">
                    <p class="zxx-dp">ZXX的8号店铺</p>
                    <p>今日幸运数字 : <span class="lunck-num">{{ luckNum }}</span></p>
                    <el-tabs v-model="activeName" @tab-click="handleClick">
                        <el-tab-pane label="用户登录" name="first">
                            <div class="login-mian">
                                <el-form :model="loginForm" status-icon :rules="loginRules" ref="loginForm" label-width="100px" class="demo-dynamic">
                                    <el-form-item label="用户名称" prop="name">
                                        <el-input v-model="loginForm.name" placeholder="请输入用户名称" width="100px"></el-input>
                                    </el-form-item>
                                    <el-form-item label="密码" prop="password">
                                        <el-input v-model="loginForm.password" :type="basic.loginPass?'password':'text'" auto-complete="off" placeholder="请输入密码">
                                            <i slot="suffix" title="隐藏密码" style="cursor:pointer;" class="el-input__icon iconfont icon-yincang"></i>
                                        </el-input>
                                    </el-form-item>
                                    <el-form-item label="验证码" prop="verCode">
                                        <el-row>
                                            <el-col :span="14">
                                                <el-input v-model="loginForm.verCode" type="text" maxlength="4" placeholder="请输入验证码"></el-input>
                                            </el-col>
                                            <el-col :span="2">
                                                 &nbsp;
                                            </el-col>
                                            <el-col :span="8">
                                                <el-button class="send-vercode ">{{ basic.verCodeText }}</el-button>
                                            </el-col>
                                        </el-row>
                                    </el-form-item>
                                    <el-form-item>
                                        <el-button type="primary" @click="submitLoginForm('loginForm')">登录</el-button>
                                        <el-button @click="resetLoginForm('loginForm')">重置</el-button>
                                    </el-form-item>
                                </el-form>
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="用户注册" name="second">
                            <div class="regist-mian">
                                <el-form :model="registForm" status-icon :rules="registRules" name="registForm" ref="registForm" label-width="100px">
                                    <el-form-item label="用户名称" prop="name">
                                        <el-input v-model="registForm.name" placeholder="请输入用户名"></el-input>
                                    </el-form-item>
                                    <el-form-item label="密码" prop="password">
                                        <el-input v-model="registForm.password" :type="basic.registPass?'password':'text'" placeholder="请输入密码"></el-input>
                                    </el-form-item>
                                    <el-form-item label="确认密码" prop="rePassword">
                                        <el-input v-model="registForm.rePassword" :type="basic.registRePass?'password':'text'" placeholder="请确认密码"></el-input>
                                    </el-form-item>
                                    <el-form-item label="性别" prop="sex">
                                        <el-radio-group v-model="registForm.sex">
                                            <el-radio label="boy"></el-radio>
                                            <el-radio label="gir"></el-radio>
                                        </el-radio-group>
                                    </el-form-item>
                                    <el-form-item label="电话号码" prop="phone">
                                        <el-input v-model="registForm.phone" placeholder="请输入电话号码"></el-input>
                                    </el-form-item>
                                    <el-form-item label="邮箱" prop="email">
                                        <el-input v-model="registForm.email" placeholder="请输入邮箱"></el-input>
                                    </el-form-item>
                                    <el-form-item label="验证码" prop="registVerCode">
                                        <el-row>
                                            <el-col :span="14">
                                                <el-input v-model="registForm.registVerCode" type="text" maxlength="4" placeholder="请输入验证码"></el-input>
                                            </el-col>
                                            <el-col :span="2">
                                                 &nbsp;
                                            </el-col>
                                            <el-col :span="8">
                                                <el-button class="send-vercode">{{ basic.registCodeText }}</el-button>
                                            </el-col>
                                        </el-row>
                                    </el-form-item>
                                    <el-form-item>
                                        <el-button type="primary" @click="submitRegistForm('registForm')">注册</el-button>
                                        <el-button @click="resetRegistForm('registForm')">重置</el-button>
                                    </el-form-item>
                                </el-form>
                            </div>
                        </el-tab-pane>
                    </el-tabs>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    import rond from "@/utils/common"
    import { verifiPhone, verifiEmail } from "@/utils/rules"

    var validPhone = (rule, value, callback) => {
        if (!value) {
            callback(new Error("请输入手机号码!"));
        } else if (!verifiPhone(value)) {
            callback(new Error("请输入正确的11位手机号码!"));
        } else {
            callback();
        }
    };
    var validEmail = (rule, value, callback) => {
        if (value === "") {
            callback(new Error("请输入邮箱"));
        } else if (!verifiEmail(value)) {
            callback(new Error("请输入正确邮箱格式!"));
        } else {
            callback();
        }
    }

    export default {
        name: "login",
        data () {
            var verfiPass = (rule, value, callback) => {
                if (value === "") {
                    callback(new Error("请输入密码"));
                } else if (this.registForm.rePassword != "") {
                    this.$refs.registForm.validateField("rePassword");
                }
                callback();
            }
            var verfiRepass = (rule, value, callback) => {
                if (value === "") {
                    callback(new Error("请输入密码"));
                } else if (value != this.registForm.password) {
                    callback(new Error("两次密码不一致"));
                } else {
                    callback();
                }
            };
            return {
                luckNum : 8,
                activeName: 'first',
                basic: {
                    loginPass: true,
                    verCodeText: "获取验证码",
                    loginCodebtn: true,
                    registPass: false,
                    registRePass: false,
                    registCodeText: "获取验证码",
                    registCodebtm: true
                },
                loginForm: {
                    name: "",
                    password: "",
                    verCode: ""
                },
                loginRules: {
                    name: [
                        { required: true, message: "请输入用户名", trigger: "blur" },
                        { min: 3, max: 8, message: "请输入3 到 8个字符", trigger: "blur" },
                    ],
                    password: [
                        { required: true, message: "请输入密码", trigger: "blur" }
                    ],
                    verCode: [
                        { required: true, message: "请输入验证码", trigger: "blur" },
                        { min: 4, message: "请输入4个字符", trigger: "blur" },
                    ]
                },
                registForm: {
                    name: "",
                    password: "",
                    rePassword: "",
                    sex: "",
                    phone: "",
                    email: "",
                    registVerCode: ""
                },
                registRules: {
                    name: [
                        { required: true, message: "请输入用户名", trigger: "blur" }
                    ],
                    password: [
                        { required: true, message: "请输入密码", trigger: "blur" },
                        { validator: verfiPass, trigger: "blur"}
                    ],
                    rePassword: [
                        { required: true, message: "请输入密码", trigger: "blur" },
                        { validator: verfiRepass, trigger: "blur" }
                    ],
                    sex: [
                        { required: true, message: "请选择性别", trigger: "change" }
                    ],
                    phone: [
                        { required: true, message: "请输入正确的手机号码", trigger: "blur" },
                        { validator: validPhone, trigger: "blur"}
                    ],
                    email: [
                        { required: true, message: "请输入正确的邮箱格式", trigger: "blur" },
                        { validator: validEmail, trigger: "blur"}
                    ],
                    registVerCode: [
                        { required: true, message: "请输入验证码", trigger: "blur" },
                        { min: 4, message: "请输入4个字符", trigger: "blur" },
                    ]
                }
            }
        },
        created() {
            this.luckNum = rond.rondomNum();
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            },
            submitLoginForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert("submit!");
                    } else {
                        console.log("error submit!!");
                        return false;
                    }
                });
            },
            resetLoginForm(formName) {
                this.$refs[formName].resetFields();
            },
            submitRegistForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert("submit");
                        axios.get({
                            url:'/login',
                        })
                    } else {
                        console.log("error submit!!");
                        return false;
                    }
                })
            },
            resetRegistForm(formName) {
                this.$refs[formName].resetFields();
            }
        },
    }
</script>

<style lang="stylus" scoped>
    #zxx 
        width 100%
        height 100%
        text-align center

        .login-module
            width 100%
            height 100%;
            background-color red
            
            .el-row,.el-col 
                height 100%

            .login-left
                background-color black 

            .login-right
                background-color orange

            .zxx-dp
                color yellow

            .lunck-num
                color green
                font-size 24px

            .login-mian
                padding-top 35px
                width: 500px
                margin 0 auto

            .send-vercode    
                padding: 12px 30px

            .regist-mian
                padding-top 35px
                width: 500px
                margin 0 auto

</style>