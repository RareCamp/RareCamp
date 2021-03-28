import { Button, notification } from "antd";
import { useRouter } from "next/router";
import { Auth } from "aws-amplify";
import styled from "styled-components";
import { useMutation } from "react-query";

const LogoutButton = styled(Button)`
  // when button is in loading state it override position attribute 
  position: absolute !important;
  top: 20px;
  right: 20px;
  z-index: 9999;
`
export default function Logout(){
  const router = useRouter();
  const mutation = useMutation(() => Auth.signOut({ global: true }), {
    onSuccess: router.reload,
    onError: (err: Error) =>
       notification.error({
        message: "Can not logout",
        description: err.message,
        placement: "topRight",
        duration: 1.5
      })
  })
  return  <LogoutButton loading={mutation.isLoading} type="primary" onClick={mutation.mutate}>Logout</LogoutButton>
}
