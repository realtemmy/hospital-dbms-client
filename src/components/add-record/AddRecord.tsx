import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {  Plus } from "lucide-react";

const AddRecord = () => {

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Hospital Records Management System
      </h1>

      <Tabs defaultValue="birth" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="birth">Birth Records</TabsTrigger>
          <TabsTrigger value="death">Death Records</TabsTrigger>
        </TabsList>

        {/* Birth Records Tab */}
        <TabsContent value="birth">
          <Card>
            <CardHeader>
              <CardTitle>Add Birth Record</CardTitle>
              <CardDescription>Enter details of the newborn</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="birthId">Birth ID *</Label>
                    <Input
                      id="birthId"
                      name="birthId"
                      // value={newBirthRecord.birthId}
                      // onChange={handleBirthFormChange}
                      placeholder="e.g. B003"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="babyName">Baby's Name *</Label>
                    <Input
                      id="babyName"
                      name="babyName"
                      // value={newBirthRecord.babyName}
                      // onChange={handleBirthFormChange}
                      placeholder="Full name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="date">Date *</Label>
                    <Input
                      id="date"
                      name="date"
                      type="date"
                      // value={newBirthRecord.date}
                      // onChange={handleBirthFormChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="time">Time</Label>
                    <Input
                      id="time"
                      name="time"
                      type="time"
                      // value={newBirthRecord.time}
                      // onChange={handleBirthFormChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="gender">Gender</Label>
                    <Select
                      // onValueChange={(value) =>
                      //   handleSelectChange(value, "gender", "birth")
                      // }
                      // value={newBirthRecord.gender}
                    >
                      <SelectTrigger id="gender">
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Male">Male</SelectItem>
                        <SelectItem value="Female">Female</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="weight">Weight (kg)</Label>
                    <Input
                      id="weight"
                      name="weight"
                      type="number"
                      step="0.01"
                      // value={newBirthRecord.weight}
                      // onChange={handleBirthFormChange}
                      placeholder="e.g. 3.5"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="deliveryType">Delivery Type</Label>
                    <Select
                      // onValueChange={(value) =>
                      //   handleSelectChange(value, "deliveryType", "birth")
                      // }
                      // value={newBirthRecord.deliveryType}
                    >
                      <SelectTrigger id="deliveryType">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Normal">Normal</SelectItem>
                        <SelectItem value="C-Section">C-Section</SelectItem>
                        <SelectItem value="Assisted">Assisted</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="condition">Condition</Label>
                    <Select
                      // onValueChange={(value) =>
                      //   handleSelectChange(value, "condition", "birth")
                      // }
                      // value={newBirthRecord.condition}
                    >
                      <SelectTrigger id="condition">
                        <SelectValue placeholder="Select condition" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Healthy">Healthy</SelectItem>
                        <SelectItem value="Critical">Critical</SelectItem>
                        <SelectItem value="Requires Attention">
                          Requires Attention
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="mother">Mother's Name</Label>
                    <Input
                      id="mother"
                      name="mother"
                      // value={newBirthRecord.mother}
                      // onChange={handleBirthFormChange}
                      placeholder="Full name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="doctor">Doctor</Label>
                    <Input
                      id="doctor"
                      name="doctor"
                      // value={newBirthRecord.doctor}
                      // onChange={handleBirthFormChange}
                      placeholder="Doctor's name"
                    />
                  </div>
                </div>

                <Button type="submit" className="m-auto w-1/2">
                  <Plus className="h-4 w-4" /> Add Record
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Death Records Tab */}
        <TabsContent value="death">
          <Card>
            <CardHeader>
              <CardTitle>Add Death Record</CardTitle>
              <CardDescription>Enter details of the deceased</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="deathId">Death ID *</Label>
                    <Input
                      id="deathId"
                      name="deathId"
                      // value={newDeathRecord.deathId}
                      // onChange={handleDeathFormChange}
                      placeholder="e.g. D003"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="patientName">Patient Name *</Label>
                    <Input
                      id="patientName"
                      name="patientName"
                      // value={newDeathRecord.patientName}
                      // onChange={handleDeathFormChange}
                      placeholder="Full name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="patientId">Patient ID</Label>
                    <Input
                      id="patientId"
                      name="patientId"
                      // value={newDeathRecord.patientId}
                      //onChange={handleDeathFormChange}
                      placeholder="e.g. P3456"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="age">Age</Label>
                    <Input
                      id="age"
                      name="age"
                      type="number"
                      // value={newDeathRecord.age}
                      // onChange={handleDeathFormChange}
                      placeholder="e.g. 65"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="deathGender">Gender</Label>
                    <Select
                      // onValueChange={(value) =>
                      //   handleSelectChange(value, "gender", "death")
                      // }
                      // value={newDeathRecord.gender}
                    >
                      <SelectTrigger id="deathGender">
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Male">Male</SelectItem>
                        <SelectItem value="Female">Female</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="dateTime">Date and Time *</Label>
                    <Input
                      id="dateTime"
                      name="dateTime"
                      type="datetime-local"
                      // value={newDeathRecord.dateTime}
                      // onChange={handleDeathFormChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="causeOfDeath">Cause of Death</Label>
                    <Input
                      id="causeOfDeath"
                      name="causeOfDeath"
                      // value={newDeathRecord.causeOfDeath}
                      // onChange={handleDeathFormChange}
                      placeholder="e.g. Heart Failure"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Select
                      // onValueChange={(value) =>
                      //   handleSelectChange(value, "location", "death")
                      // }
                      // value={newDeathRecord.location}
                    >
                      <SelectTrigger id="location">
                        <SelectValue placeholder="Select location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ICU">ICU</SelectItem>
                        <SelectItem value="Emergency">Emergency</SelectItem>
                        <SelectItem value="Ward">Ward</SelectItem>
                        <SelectItem value="Operation Theater">
                          Operation Theater
                        </SelectItem>
                        <SelectItem value="Outside Hospital">
                          Outside Hospital
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="familyNotified">Family Notified</Label>
                    <Select
                      // onValueChange={(value) =>
                      //   handleFamilyNotifiedChange(value)
                      // }
                      // value={newDeathRecord.familyNotified ? "yes" : "no"}
                    >
                      <SelectTrigger id="familyNotified">
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes">Yes</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button type="submit" className="m-auto w-1/2 ">
                  <Plus className="h-4 w-4" /> Add Record
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default AddRecord;
