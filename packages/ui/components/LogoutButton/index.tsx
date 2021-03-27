import { Button, notification } from "antd";
import { useRouter } from "next/router";
import { Auth } from "aws-amplify";
import styled from "styled-components";
import { useState } from "react";

const LogoutButton = styled(Button)`
  // when button is in loading state it override position attribute 
  position: absolute !important;
  top: 20px;
  right: 20px;
  z-index: 9999;
`
export default function Logout(){
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false)
  let handleLogout = async () => {
    setIsLoading(true)
    try {
      await Auth.signOut({ global: true });
      router.reload()
    } catch (e) {
      debugger;
      notification.error({

        message: "Can not logout",
        description: e.message,
        placement: "topRight",
        duration: 1.5
      });
    } finally {
      setIsLoading(false)
    }
  };
  return  <LogoutButton loading={isLoading} type="primary" onClick={handleLogout}>Logout</LogoutButton>
}
