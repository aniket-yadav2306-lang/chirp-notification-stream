
import { Notification, NotificationType, NotificationResponse, NotificationsResponse } from "../types/notification";
import { toast } from "sonner";

// Mock user ID for demo purposes
const CURRENT_USER_ID = "user-123";

// In-memory store for notifications
let notificationsStore: Notification[] = [
  {
    id: "notif-1",
    userId: CURRENT_USER_ID,
    type: "email",
    title: "New Email Update",
    content: "You have received a new email from your manager about the quarterly review.",
    timestamp: new Date(Date.now() - 3600000).toISOString(), // 1 hour ago
    read: false,
    metadata: {
      sender: "manager@company.com",
      priority: "high"
    }
  },
  {
    id: "notif-2",
    userId: CURRENT_USER_ID,
    type: "sms",
    title: "SMS Verification",
    content: "Your verification code is 123456. It expires in 10 minutes.",
    timestamp: new Date(Date.now() - 7200000).toISOString(), // 2 hours ago
    read: true
  },
  {
    id: "notif-3",
    userId: CURRENT_USER_ID,
    type: "in-app",
    title: "Welcome to Chirp!",
    content: "Welcome to our notification system. Explore the features and let us know what you think!",
    timestamp: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
    read: false
  },
  {
    id: "notif-4",
    userId: CURRENT_USER_ID,
    type: "email",
    title: "Weekly Newsletter",
    content: "Check out the latest updates and features in our weekly newsletter.",
    timestamp: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
    read: true
  }
];

// Simulate API request delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Get user notifications
export async function getUserNotifications(userId: string): Promise<NotificationsResponse> {
  try {
    // Simulate network request
    await delay(800);
    
    // Simulate API response
    const userNotifications = notificationsStore
      .filter(notif => notif.userId === userId)
      .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
    
    return {
      success: true,
      message: "Notifications retrieved successfully",
      data: userNotifications
    };
  } catch (error) {
    console.error("Error fetching notifications:", error);
    return {
      success: false,
      message: "Failed to retrieve notifications",
      data: []
    };
  }
}

// Send a new notification
export async function sendNotification(
  userId: string, 
  type: NotificationType, 
  title: string, 
  content: string,
  metadata?: Record<string, any>
): Promise<NotificationResponse> {
  try {
    // Simulate network request
    await delay(1000);
    
    // Create a new notification
    const newNotification: Notification = {
      id: `notif-${Date.now()}`,
      userId,
      type,
      title,
      content,
      timestamp: new Date().toISOString(),
      read: false,
      metadata
    };
    
    // Add to store
    notificationsStore = [newNotification, ...notificationsStore];
    
    // Show success toast
    toast.success("Notification sent successfully");
    
    return {
      success: true,
      message: "Notification sent successfully",
      data: newNotification
    };
  } catch (error) {
    console.error("Error sending notification:", error);
    
    toast.error("Failed to send notification");
    
    return {
      success: false,
      message: "Failed to send notification"
    };
  }
}

// Mark a notification as read
export async function markAsRead(notificationId: string): Promise<NotificationResponse> {
  try {
    // Simulate network request
    await delay(500);
    
    // Update notification in store
    notificationsStore = notificationsStore.map(notification => 
      notification.id === notificationId 
        ? { ...notification, read: true } 
        : notification
    );
    
    const updatedNotification = notificationsStore.find(n => n.id === notificationId);
    
    if (!updatedNotification) {
      return {
        success: false,
        message: "Notification not found"
      };
    }
    
    return {
      success: true,
      message: "Notification marked as read",
      data: updatedNotification
    };
  } catch (error) {
    console.error("Error marking notification as read:", error);
    return {
      success: false,
      message: "Failed to mark notification as read"
    };
  }
}

// Mark all notifications as read
export async function markAllAsRead(userId: string): Promise<NotificationsResponse> {
  try {
    // Simulate network request
    await delay(800);
    
    // Update all notifications for the user
    notificationsStore = notificationsStore.map(notification => 
      notification.userId === userId 
        ? { ...notification, read: true } 
        : notification
    );
    
    const updatedNotifications = notificationsStore.filter(n => n.userId === userId);
    
    toast.success("All notifications marked as read");
    
    return {
      success: true,
      message: "All notifications marked as read",
      data: updatedNotifications
    };
  } catch (error) {
    console.error("Error marking all notifications as read:", error);
    
    toast.error("Failed to mark all notifications as read");
    
    return {
      success: false,
      message: "Failed to mark all notifications as read",
      data: []
    };
  }
}

// Get current user ID (for demo purposes)
export function getCurrentUserId(): string {
  return CURRENT_USER_ID;
}
