import {
  IonContent,
  IonItem,
  IonPage,
  IonList,
  IonRow,
  IonTitle,
} from "@ionic/react";
import {
  PersonCircleOutline,
  PersonOutline,
  PeopleOutline,
  DocumentTextOutline,
} from "react-ionicons";

const User: React.FC = (props) => {
  const id = 1;

  return (
    <IonPage>
      <IonContent>
        <PersonCircleOutline
          cssClasses="center"
          color={"#04AA6D"}
          height="200px"
          width="200px"
        />
        <p
          style={{
            fontWeight: "bold",
            color: "#3880ff",
            fontFamily: "sans-serif",
            textAlign: "center",
            fontSize: "large",
          }}
        >
          Rakesh (10th-A){" "}
        </p>
        <p
          style={{
            fontWeight: "bold",
            color: "#3880ff",
            fontFamily: "sans-serif",
            textAlign: "center",
            fontSize: "large",
          }}
        >
          {" "}
          Admission No. 627{" "}
        </p>

        <IonList>
          <IonItem>
            <IonRow>
              <PersonOutline
                cssClasses="left"
                color={"#04AA6D"}
                height="40px"
                width="30px"
              />

              <IonItem routerLink={"/student-details/" + id}>
                <IonTitle
                  style={{
                    color: "#3880ff",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Student
                </IonTitle>
              </IonItem>
            </IonRow>
          </IonItem>
          <IonItem>
            <IonRow>
              <PeopleOutline
                cssClasses="left"
                color={"#04AA6D"}
                height="40px"
                width="30px"
              />

              <IonItem routerLink={"/parent-details/" + id}>
                <IonTitle
                  style={{
                    color: "#3880ff",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Parents
                </IonTitle>
              </IonItem>
            </IonRow>
          </IonItem>
          <IonItem>
            <IonRow>
              <PeopleOutline
                cssClasses="left"
                color={"#04AA6D"}
                height="40px"
                width="30px"
              />

              <IonItem routerLink={"/guardian-details/" + id}>
                <IonTitle
                  style={{
                    color: "#3880ff",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Guardians
                </IonTitle>
              </IonItem>
            </IonRow>
          </IonItem>

          <IonItem>
            <IonRow>
              <DocumentTextOutline
                cssClasses="left"
                color={"#04AA6D"}
                height="40px"
                width="30px"
              />

              <IonItem routerLink={"/document-details/" + id}>
                <IonTitle
                  style={{
                    color: "#3880ff",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Documents
                </IonTitle>
              </IonItem>
            </IonRow>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default User;
