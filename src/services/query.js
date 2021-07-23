export const get = async (path, options = {}) => await fetch(path, options).then(res => res.json());

export const post = () => null;
