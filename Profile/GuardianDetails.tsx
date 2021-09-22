import {
  IonCol,
  IonContent,
  IonItem,
  IonPage,
  IonTitle,
} from "@ionic/react";
import React from "react";
const GuardianDetails: React.FC = () => {
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
              Legal Guardian Details
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
              Local Guardian Details
            </IonTitle>
          </IonItem>
        </IonCol>
      </IonContent>
    </IonPage>
  );
};
export default GuardianDetails;
