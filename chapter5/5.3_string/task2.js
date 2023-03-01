function checkSpam(str) {
    const lowStr = str.toLowercase();
    return (lowStr.includes('viagra') || lowStr.includes('xxx'));
}