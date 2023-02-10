import { Box, HStack, Heading, Button, Textarea } from "@chakra-ui/react"
import PostsLists from "components/post/PostsLists";
import { useAuth } from "hooks/auth";
import { useAddPost, usePosts } from "hooks/posts";
import { useForm } from "react-hook-form";
import reactTextareaAutosize from "react-textarea-autosize";

function NewPost() {
    const {register, handleSubmit, reset} = useForm();
    const {addPost, isLoading: addingPost} = useAddPost();
    const {user, isLoading: authLoading} = useAuth();

    function handleAddPost(data){
        addPost({
            uid: user.id,
            text: data.text,

        })
        reset();
    }
    return(
        <Box maxW="600px" mx="auto" py="10">
            <form onSubmit={handleSubmit(handleAddPost)}>
                <HStack justify="space-between">
                    <Heading size="lg">New Post</Heading>
                    <Button 
                    colorScheme={"blue"} 
                    type="submit" 
                    isLoading={authLoading || addingPost} 
                    loadingText="Loading">Post</Button>

                </HStack>
                <Textarea 
                as={reactTextareaAutosize}
                resize={"none"} 
                mt="5" 
                placeholder="Create a new post"
                minRows={4}
                {...register("text", {required: true})}/>

            </form>


        </Box>

    );

}

export default function Dashboard() {
    const {posts, isLoading: postsLoading} = usePosts();

    if (postsLoading) return "Loading posts...";
    
    return(
        <><NewPost />
        <PostsLists posts={posts}/>
        </>

    );
}