// This is not a Promise. It's a special object from our Suspense integration.
const resource = fetchProfileData();

function ProfilePage() {
    return (
        <Suspense fallback={<h1>Loading profile...</h1>}>
            <ProfileDetails />
            <Suspense fallback={<h1>Loading posts...</h1>}>
                <ProfileTimeline />
            </Suspense>
        </Suspense>
    );
}

function ProfileDetails() {
    // Try to read user info, although it might not have loaded yet
    const user = resource.user.read();
    return <h1>{user.name}</h1>;
}

function ProfileTimeline() {
    // Try to read posts, although they might not have loaded yet
    const posts = resource.posts.read();
    return (
        <ul>
            {posts.map(post => (
                <li key={post.id}>{post.text}</li>
            ))}
        </ul>
    );
}