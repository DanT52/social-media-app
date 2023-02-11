import { IconButton } from "@chakra-ui/button";
import { Flex } from "@chakra-ui/layout";
import {FaRegHeart, FaHeart} from "react-icons/fa"

export function Actions() {

    return (
        <Flex p="2">
            <Flex alignItems="center">
                <IconButton size="md" colorScheme="red" variant="ghost" icon={<FaRegHeart/>} isRound/>
                5
            </Flex>


        </Flex>

    )
}