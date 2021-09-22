import {
  IonCol,
  IonContent,
  IonItem,
  IonPage,
  IonRow,
  IonTitle,
} from "@ionic/react";
import React from "react";
const ParentDetails: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonCol>
          <IonItem>
            <IonTitle
              style={{
                color: "#222428",
                textAlign: "left",
                fontWeight: "normal",
              }}
            >
              Father Details
            </IonTitle>
          </IonItem>
          <IonItem>
            <IonTitle
              style={{
                color: "#222428",
                textAlign: "left",
                fontWeight: "normal",
              }}
            >
              Mother Details
            </IonTitle>
          </IonItem>
        </IonCol>
      </IonContent>
    </IonPage>
  );
};
export default ParentDetails;
