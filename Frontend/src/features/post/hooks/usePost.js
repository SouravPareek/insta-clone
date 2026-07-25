import {
    getFeed,
    createPost,
    likePost,
    unLikePost,
} from "../services/post.api";
import { useCallback, useContext } from "react";
import { PostContext } from "../post.context";

export const usePost = () => {
    const context = useContext(PostContext);

    const { loading, setLoading, post, feed, setFeed } = context;

    const handleGetFeed = useCallback(async () => {
        try {
            setLoading(true);

            const data = await getFeed();

            if (!data || !data.posts) {
                throw new Error("Unauthorized");
            }

            setFeed(data.posts.reverse());
        } catch (err) {
            setFeed(null);
            throw err;
        } finally {
            setLoading(false);
        }
    }, [setFeed, setLoading]);

    const handleCreatePost = async (imageFile, caption) => {
        setLoading(true);

        try {
            const data = await createPost(imageFile, caption);

            setFeed((currentFeed) => [data.post, ...(currentFeed ?? [])]);
            return data;
        } finally {
            setLoading(false);
        }
    };

    const updateFeedLikeState = (postId, isLiked) => {
        setFeed((currentFeed) =>
            (currentFeed ?? []).map((post) =>
                post._id === postId ? { ...post, isLiked } : post,
            ),
        );
    };

    const handleLike = async (postId) => {
        await likePost(postId);
        updateFeedLikeState(postId, true);
    };

    const handleUnLike = async (postId) => {
        await unLikePost(postId);
        updateFeedLikeState(postId, false);
    };

    return {
        loading,
        feed,
        post,
        handleGetFeed,
        handleCreatePost,
        handleLike,
        handleUnLike,
    };
};
