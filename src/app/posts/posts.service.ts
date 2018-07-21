import { Post } from './post.model';
import { Subject } from 'rxjs';

export class PostsService {
    private posts: Post[] = [];
    private postsUpdated = new Subject<Post[]>();

    getPosts() {
        return [...this.posts];
    }

    getPostsUpdatedListener() {
        return this.postsUpdated.asObservable();
    }

    addPost(title: string, content: string) {
        const post: Post = {
            title,
            content
        }
        this.posts.push(post);
        this.postsUpdated.next([...this.posts]);
    }
}