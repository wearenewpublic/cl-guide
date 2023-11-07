
export function stripSuffix(str, suffix) {
    if (str.endsWith(suffix)) {
        return str.substring(0, str.length - suffix.length);
    } else {
        return str;
    }
}
