import {
  IonCol,
  IonContent,
  IonItem,
  IonPage,
  IonTitle,
} from "@ionic/react";
import React from "react";
const StudentDetails: React.FC = () => {
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
              Personal Details
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
              Academic Details
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
              Contact Details
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
              Previous School Details
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
              Miscellaneous Details
            </IonTitle>
          </IonItem>
        </IonCol>
      </IonContent>
    </IonPage>
  );
};
export default StudentDetails;
