import { useComments } from "hooks/comments"

export default function Commentlist({post}) {
    const {id} = post;
    const {comments, isLoading } = useComments(id)

    if (isLoading) return "loading..."

    return comments.map((comment) => <>{comment.text}<br/></>);
}