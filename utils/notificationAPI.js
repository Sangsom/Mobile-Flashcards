import { NOTIFICATION_KEY } from "./constants";
import { AsyncStorage } from "react-native";
import { Notifications, Permissions } from "expo";

const createNotification = () => {
  return {
    title: "Mobile Flashcards",
    body: `Don't forget to check the quiz today!!!`,
    ios: {
      sound: true
    },
    android: {
      sound: true,
      vibrate: true
    }
  };
};

export function setLocalNotification() {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then(data => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
          if (status === "granted") {
            Notifications.cancelAllScheduledNotificationsAsync();

            let tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            tomorrow.setHours(20);
            tomorrow.setMinutes(0);

            Notifications.scheduleLocalNotificationAsync(createNotification(), {
              time: tomorrow,
              repeat: "day"
            });

            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
          }
        });
      }
    });
}
