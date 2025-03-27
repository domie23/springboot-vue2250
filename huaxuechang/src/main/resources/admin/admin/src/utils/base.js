const base = {
    get() {
        return {
            url : "http://localhost:8080/huaxuechang/",
            name: "huaxuechang",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/huaxuechang/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "滑雪场管理系统"
        } 
    }
}
export default base
