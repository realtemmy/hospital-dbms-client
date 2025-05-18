import { useState } from "react";
import {
  Settings as SettingsIcon,
  Users,
  Bell,
  Lock,
  Database,
  Shield,
  HardDrive,
  Mail,
  AlertCircle,
  Save,
} from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../components/ui/tabs";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";

// Form components not needed as we'll use standard divs with tailwind

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";

import { Alert, AlertDescription, AlertTitle } from "../../../components/ui/alert";

import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import { Switch } from "../../../components/ui/switch";
import { Textarea } from "../../../components/ui/textarea";
import { Separator } from "../../../components/ui/separator";
import { Badge } from "../../../components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../../../components/ui/avatar";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("general");
  const [saving, setSaving] = useState(false);

  const handleSave = () => {
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
    }, 1000);
  };

  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Admin Settings</h1>
          <p className="text-muted-foreground">
            Configure your hospital database management system settings
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Avatar className="h-10 w-10">
            <AvatarImage src="/api/placeholder/400/400" alt="Dr. Admin" />
            <AvatarFallback>DA</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">Dr. Admin</p>
            <p className="text-xs text-muted-foreground">
              System Administrator
            </p>
          </div>
        </div>
      </div>

      <Alert variant="default" className="bg-blue-50 border-blue-200">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>System Update Available</AlertTitle>
        <AlertDescription>
          A new system update (v2.3.4) is available. Schedule maintenance to
          apply this update.
        </AlertDescription>
      </Alert>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 mb-8">
          <TabsTrigger value="general" className="flex items-center gap-2">
            <SettingsIcon className="h-4 w-4" />
            <span className="hidden md:inline">General</span>
          </TabsTrigger>
          <TabsTrigger value="users" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            <span className="hidden md:inline">Users</span>
          </TabsTrigger>
          <TabsTrigger
            value="notifications"
            className="flex items-center gap-2"
          >
            <Bell className="h-4 w-4" />
            <span className="hidden md:inline">Notifications</span>
          </TabsTrigger>
          <TabsTrigger value="security" className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            <span className="hidden md:inline">Security</span>
          </TabsTrigger>
          <TabsTrigger value="database" className="flex items-center gap-2">
            <Database className="h-4 w-4" />
            <span className="hidden md:inline">Database</span>
          </TabsTrigger>
          <TabsTrigger value="storage" className="flex items-center gap-2">
            <HardDrive className="h-4 w-4" />
            <span className="hidden md:inline">Storage</span>
          </TabsTrigger>
          <TabsTrigger value="email" className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <span className="hidden md:inline">Email</span>
          </TabsTrigger>
          <TabsTrigger value="access" className="flex items-center gap-2">
            <Lock className="h-4 w-4" />
            <span className="hidden md:inline">Access</span>
          </TabsTrigger>
        </TabsList>

        {/* General Settings */}
        <TabsContent value="general" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Hospital Information</CardTitle>
              <CardDescription>
                Configure your hospital basic information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Hospital Name</label>
                    <Input defaultValue="Northside Medical Center" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Hospital ID</label>
                    <Input defaultValue="NSM-12345" disabled />
                    <p className="text-sm text-muted-foreground">
                      Hospital ID cannot be changed
                    </p>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Phone Number</label>
                    <Input defaultValue="+1 (555) 123-4567" />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email Address</label>
                    <Input defaultValue="admin@northsidemedical.org" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Time Zone</label>
                    <Select defaultValue="america_new_york">
                      <SelectTrigger>
                        <SelectValue placeholder="Select timezone" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="america_new_york">
                          America/New York (EST/EDT)
                        </SelectItem>
                        <SelectItem value="america_chicago">
                          America/Chicago (CST/CDT)
                        </SelectItem>
                        <SelectItem value="america_denver">
                          America/Denver (MST/MDT)
                        </SelectItem>
                        <SelectItem value="america_los_angeles">
                          America/Los Angeles (PST/PDT)
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Address</label>
                    <Textarea defaultValue="123 Medical Drive, Suite 100, Healthcare City, HC 12345" />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between border-t p-6">
              <Button variant="outline">Cancel</Button>
              <Button onClick={handleSave} disabled={saving}>
                {saving ? (
                  <>
                    <span className="animate-spin mr-2">◌</span>
                    Saving...
                  </>
                ) : (
                  <>
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>System Preferences</CardTitle>
              <CardDescription>
                Configure global system preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <label className="text-base font-medium">Auto-logout</label>
                    <p className="text-sm text-muted-foreground">
                      Automatically log out inactive users
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <label className="text-base font-medium">
                      Audit Logging
                    </label>
                    <p className="text-sm text-muted-foreground">
                      Keep detailed logs of all system activities
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <label className="text-base font-medium">Dark Mode</label>
                    <p className="text-sm text-muted-foreground">
                      Enable dark mode for the entire application
                    </p>
                  </div>
                  <Switch />
                </div>
                <Separator />

                <div className="space-y-2">
                  <label className="text-base font-medium">
                    Session Timeout (minutes)
                  </label>
                  <Select defaultValue="30">
                    <SelectTrigger>
                      <SelectValue placeholder="Select timeout duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5">5 minutes</SelectItem>
                      <SelectItem value="15">15 minutes</SelectItem>
                      <SelectItem value="30">30 minutes</SelectItem>
                      <SelectItem value="60">60 minutes</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between border-t p-6">
              <Button variant="outline">Reset to Defaults</Button>
              <Button onClick={handleSave} disabled={saving}>
                {saving ? (
                  <>
                    <span className="animate-spin mr-2">◌</span>
                    Saving...
                  </>
                ) : (
                  <>
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Users Settings Placeholder */}
        <TabsContent value="users">
          <Card>
            <CardHeader>
              <CardTitle>User Management</CardTitle>
              <CardDescription>
                Manage user accounts and permissions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center p-12">
                <p className="text-muted-foreground text-center">
                  User management settings interface would appear here. This
                  would include user lists, role assignments, and account
                  controls.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notifications Settings Placeholder */}
        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>
                Configure system notifications and alerts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center p-12">
                <p className="text-muted-foreground text-center">
                  Notification settings interface would appear here. This would
                  include email notifications, SMS settings, and alert
                  preferences.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security Settings */}
        <TabsContent value="security" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <CardTitle>Password Policy</CardTitle>
                  <CardDescription>
                    Configure password requirements for users
                  </CardDescription>
                </div>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                  Active
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      Minimum Password Length
                    </label>
                    <Select defaultValue="12">
                      <SelectTrigger>
                        <SelectValue placeholder="Select minimum length" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="8">8 characters</SelectItem>
                        <SelectItem value="10">10 characters</SelectItem>
                        <SelectItem value="12">12 characters</SelectItem>
                        <SelectItem value="16">16 characters</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <label className="text-base font-medium">
                        Require Uppercase
                      </label>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <label className="text-base font-medium">
                        Require Numbers
                      </label>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      Password Expiry
                    </label>
                    <Select defaultValue="90">
                      <SelectTrigger>
                        <SelectValue placeholder="Select expiry period" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="30">30 days</SelectItem>
                        <SelectItem value="60">60 days</SelectItem>
                        <SelectItem value="90">90 days</SelectItem>
                        <SelectItem value="180">180 days</SelectItem>
                        <SelectItem value="never">Never</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <label className="text-base font-medium">
                        Require Special Characters
                      </label>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <label className="text-base font-medium">
                        Prevent Password Reuse
                      </label>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between border-t p-6">
              <Button variant="outline">Reset to Defaults</Button>
              <Button onClick={handleSave} disabled={saving}>
                {saving ? (
                  <>
                    <span className="animate-spin mr-2">◌</span>
                    Saving...
                  </>
                ) : (
                  <>
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Two-Factor Authentication</CardTitle>
              <CardDescription>
                Enable additional security for user accounts
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <label className="text-base font-medium">
                    Require 2FA for All Users
                  </label>
                  <p className="text-sm text-muted-foreground">
                    Force all users to set up two-factor authentication
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />

              <div className="space-y-2">
                <label className="text-base font-medium">
                  2FA Methods Allowed
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Switch id="sms" defaultChecked />
                    <label htmlFor="sms" className="text-sm">
                      SMS Authentication
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="app" defaultChecked />
                    <label htmlFor="app" className="text-sm">
                      Authenticator App
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="email" defaultChecked />
                    <label htmlFor="email" className="text-sm">
                      Email Authentication
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="hardware" />
                    <label htmlFor="hardware" className="text-sm">
                      Hardware Security Keys
                    </label>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between border-t p-6">
              <Button variant="outline">Reset to Defaults</Button>
              <Button onClick={handleSave} disabled={saving}>
                {saving ? (
                  <>
                    <span className="animate-spin mr-2">◌</span>
                    Saving...
                  </>
                ) : (
                  <>
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Database Settings Placeholder */}
        <TabsContent value="database">
          <Card>
            <CardHeader>
              <CardTitle>Database Configuration</CardTitle>
              <CardDescription>
                Configure database connection and backup settings
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center p-12">
                <p className="text-muted-foreground text-center">
                  Database configuration settings would appear here. This would
                  include connection parameters, backup schedules, and
                  maintenance options.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Storage Settings Placeholder */}
        <TabsContent value="storage">
          <Card>
            <CardHeader>
              <CardTitle>Storage Settings</CardTitle>
              <CardDescription>
                Configure file storage and retention policies
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center p-12">
                <p className="text-muted-foreground text-center">
                  Storage settings interface would appear here. This would
                  include file system configurations, retention policies, and
                  archiving settings.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Email Settings Placeholder */}
        <TabsContent value="email">
          <Card>
            <CardHeader>
              <CardTitle>Email Configuration</CardTitle>
              <CardDescription>
                Configure email server settings and templates
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center p-12">
                <p className="text-muted-foreground text-center">
                  Email configuration settings would appear here. This would
                  include SMTP server details, email templates, and notification
                  settings.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Access Settings Placeholder */}
        <TabsContent value="access">
          <Card>
            <CardHeader>
              <CardTitle>Access Control</CardTitle>
              <CardDescription>
                Configure role-based access control settings
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center p-12">
                <p className="text-muted-foreground text-center">
                  Access control settings would appear here. This would include
                  role definitions, permission mappings, and access control
                  policies.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;
