import React, { useEffect } from "react";
import "../styles/feed.scss";
import Post from "../components/Post";
import { usePost } from "../hooks/usePost";
import Nav from "../../shared/components/Nav";
import { useNavigate } from "react-router-dom";


const Feed = () => {
    const navigate = useNavigate();
    const { feed, handleGetFeed, loading, handleLike, handleUnLike } =
        usePost();

    useEffect(() => {
    const fetchFeed = async () => {
        try {
            await handleGetFeed();
        } catch (err) {
            navigate("/login");
        }
    };

    fetchFeed();
}, []);

    if (loading) {
        return (
            <main>
                <h1>Feed is loading...</h1>
            </main>
        );
    }

    if (!feed) {
        return (
            <main>
                <h1>Please login to see feed</h1>
            </main>
        );
    }

    return (
        <main className="feed-page">
            <Nav />
            <div className="feed">
                <div className="posts">
                    {feed.map((post) => {
                        return (
                            <Post
                                user={post.user}
                                post={post}
                                loading={loading}
                                handleLike={handleLike}
                                handleUnlike={handleUnLike}
                            />
                        );
                    })}
                </div>
            </div>
        </main>
    );
};

export default Feed;
