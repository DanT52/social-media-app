import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/button";
import { PROTECTED } from "lib/routes";

export default function UsernameButton( {user} ) {

    return(
        <Button
            as ={Link}
            to={`${PROTECTED}/profile/${user.id}`}
            colorScheme="blue"
            variant="link">
            @{user.username}
        </Button>
    );
}