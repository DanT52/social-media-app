
import Post from "./index";
import { Box, Text } from "@chakra-ui/react"
export default function PostsLists( { posts }){
    return (

        <Box px="4">
            {posts?.length===0 
            ? <Text textAlign={"center"} fontSize={"xl"}>No Posts Yet :(</Text>
            : posts?.map(post => <Post key={post.id} post={post} />)}
        </Box>

    );

}