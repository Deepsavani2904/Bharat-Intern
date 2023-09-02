import React from 'react';
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';


const RoomPage = () => {
    const { roomId } = useParams();

    const metting = async(element) => {
          const appID = 1920738582;
          const serverSecret = "d2d6de8f7322f8647021c053fd6cfa95";
          const KitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, Date.now().toString(),"Deep Savani" );

      const zc = ZegoUIKitPrebuilt.create(KitToken)
      zc.joinRoom({
         container : element,
         sharedLinks: [
            {
                name: 'Copy Link',
                url: `http://localhost:3000/room/${roomId}`
            }
         ],
         scenario: {
            mode: ZegoUIKitPrebuilt.OneONoneCall,
         },
         showScreenSharingButton : true,

      })
      

    }
    return(
        <div>
            <div ref = {metting}/>
        </div>
    )
}

export default RoomPage;