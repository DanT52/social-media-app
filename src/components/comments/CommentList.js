import { useComments } from "hooks/comments"
import { Box } from "@chakra-ui/react"
import Comment from "./Comment";

export default function Commentlist({post}) {
    const {id} = post;
    const {comments, isLoading } = useComments(id)

    if (isLoading) return "loading..."

    return (

        <Box>
        {comments.map((comment) => <Comment key={comment.id} comment={comment}/>)}
        </Box>

    );
}