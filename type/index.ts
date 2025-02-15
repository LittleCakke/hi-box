export interface Result<T>
{
    code?: 200 | 400;
    msg?: string;
    data?: T;
}

export interface CalendarItem
{
    key?: string;
    date?: number;
    isSigned?: boolean;
}

export interface Page<T>
{
    records?: T[];
    total?: 0;
    size?: 0;
    current?: 0;
    pages?: 0;
}

export interface Category
{
    categoryId?: string;
    categoryName?: string;
    userId?: string;
    createTime?: string;
}

export interface User
{
    userId?: string;
    username?: string;
    password?: string;
    phone?: string;
    email?: string;
    avatar?: string;
    signature?: string;
    level?: number;
    points?: number;
    exp?: number;
    createTime?: string;
}

export interface Blog
{
    blogId?: string;
    title?: string;
    images?: string[];
    content?: string;
    userId?: string;
    itemId?: string;
    tags?: string[];
    createTime?: string;
    updateTime?: string;
}

export interface BlogLike
{
    likeId?: string;
    blogId?: string;
    userId?: string;
}

export interface BlogComment
{
    commentId?: string;
    userId?: string;
    blogId?: string;
    content?: string;
    parentId?: string;
    answerId?: string;
    createTime?: string;
}

export interface LoginType
{
    phone?: string;
    password?: string;
    code?: string;
}
