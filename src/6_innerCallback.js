const funcWithInnerCallback = function (to, from, next) {
    next((vm) => {
        const { params } = to;
        const { post } = vm;
        if (params.uid !== post.uid && typeof post.uid === "string") {
            next({ path: `/blog/${post.uid}/` });
        }
    });
};

export default funcWithInnerCallback;
