import { IconButton } from "@chakra-ui/button";
import { Flex } from "@chakra-ui/layout";
import { useAuth } from "hooks/auth";
import {FaRegHeart, FaHeart, FaComment, FaRegComment, FaTrash} from "react-icons/fa";
import {useToggleLike, useDeletePost} from "hooks/posts";
import { Link } from "react-router-dom";
import { PROTECTED } from "lib/routes";

export function Actions({post}) {

    const { id, likes} = post;
    const {user, isLoading: userLoading} = useAuth();

    const isLiked = likes.includes(user?.id);

    const {toggleLike, isLoading: likeLoading} = useToggleLike({id, isLiked, uid: user?.id});
    const {deletePost, isLoading: deleteLoading} = useDeletePost(id);

   


    return (
        <Flex p="2">
            <Flex alignItems="center">
                <IconButton 
                onClick={toggleLike}
                isLoading={likeLoading || userLoading}
                size="md" 
                colorScheme="red" 
                variant="ghost" 
                icon={isLiked ? <FaHeart/> : <FaRegHeart/>} 
                isRound/>
                {likes.length}
            </Flex>
            <Flex alignItems="center" ml="2">
                <IconButton 
                as={Link}
                to={`${PROTECTED}/comments/${id}`}
                //isLoading={likeLoading || userLoading}
                size="md" 
                colorScheme="blue" 
                variant="ghost" 
                icon={<FaRegComment />}
                isRound/>
                 5
            </Flex>

            <IconButton 
                ml="auto"
                onClick={deletePost}
                isLoading={deleteLoading || userLoading}
                size="md" 
                colorScheme="red" 
                variant="ghost" 
                icon={<FaTrash />}
                isRound/>
            


        </Flex>

    )
}