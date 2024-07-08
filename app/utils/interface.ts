export interface Post {
    posts: {
        createdAt: string,
        id: string,
        overview: string,
        slug: string
        title: string
    }[]
}

export interface PostId {
    post: {
        id: string,
        overview: string,
        title: string,
        slug: string,
        publishedAt: string,
        body: any
    }
}

export interface Projects {
    projects: {
        id: string,
        link: string,
        overview: string,
        title: string
        titleImage: {
            url: string
        }
        publishedAt: string
    }[]
}
