import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../../../components/ui/avatar";
import { Badge } from "../../../components/ui/badge";

const VoiceCalls = () => {
  return (
    <div className="h-full bg-gray-50">
      <div className="max-w-2xl mx-auto">
        <Card className="bg-white shadow-lg">
          <CardHeader className="text-center space-y-4">
            <CardTitle className="text-3xl text-gray-900">Calling...</CardTitle>
            <div className="flex items-center justify-center gap-2">
              <Badge variant="outline" className="bg-blue-50 text-blue-600 border-blue-200 animate-pulse">
                Connecting
              </Badge>
            </div>
          </CardHeader>

          <CardContent className="space-y-8">
            {/* Caller Info Section */}
            <div className="text-center space-y-4">
              <div className="relative">
                <Avatar className="w-32 h-32 mx-auto border-4 border-gray-100">
                  <AvatarImage src="/placeholder-avatar.jpg" alt="Dr. John Doe" />
                  <AvatarFallback className="text-4xl bg-gray-100">👤</AvatarFallback>
                </Avatar>
                {/* Connecting animation circles */}
                <div className="absolute inset-0 -m-4">
                  <div className="absolute inset-0 rounded-full border-2 border-blue-200 animate-ping"></div>
                  <div className="absolute inset-0 rounded-full border-2 border-blue-200 animate-ping" style={{ animationDelay: '0.5s' }}></div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-1">Dr. John Doe</h2>
                <p className="text-gray-500">Cardiologist</p>
              </div>
            </div>

            {/* Call Controls */}
            <div className="flex justify-center">
              <Button
                variant="outline"
                size="icon"
                className="w-16 h-16 rounded-full bg-red-50 hover:bg-red-100 border-red-200"
              >
                <span className="text-2xl">📞</span>
              </Button>
            </div>

            {/* Additional Info */}
            <div className="flex justify-center gap-4 text-sm">
              <Badge variant="outline" className="bg-gray-50 text-gray-600 border-gray-200">
                Waiting for response...
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default VoiceCalls;
