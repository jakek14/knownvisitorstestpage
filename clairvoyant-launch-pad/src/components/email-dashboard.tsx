import React from 'react'
import { Search, Archive, Trash2, Mail, Clock, Reply, Forward, MoreHorizontal, Send } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

const EmailDashboard: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto bg-white rounded-xl shadow-2xl border overflow-hidden relative transform hover:scale-[1.02] transition-transform duration-300">
      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background via-background/90 to-transparent pointer-events-none z-10" />
      {/* Enhanced shadow overlay */}
      <div className="absolute inset-0 rounded-xl shadow-inner pointer-events-none" />
      <div className="flex h-[500px]">
        {/* Left Sidebar */}
        <div className="w-64 bg-gray-50 border-r p-4">
          {/* User Profile */}
          <div className="flex items-center space-x-3 mb-6 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
            <Avatar className="h-8 w-8">
              <AvatarFallback>AK</AvatarFallback>
            </Avatar>
            <span className="font-medium text-sm">Alicia Koch</span>
          </div>

          {/* Folders */}
          <div className="space-y-1">
            <div className="flex items-center justify-between p-2 rounded-lg bg-blue-50 text-blue-700">
              <span className="text-sm font-medium">Inbox</span>
              <Badge variant="secondary" className="text-xs">128</Badge>
            </div>
            <div className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
              <span className="text-sm">Drafts</span>
              <Badge variant="secondary" className="text-xs">9</Badge>
            </div>
            <div className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
              <span className="text-sm">Sent</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
              <span className="text-sm">Junk</span>
              <Badge variant="secondary" className="text-xs">23</Badge>
            </div>
            <div className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
              <span className="text-sm">Trash</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
              <span className="text-sm">Archive</span>
            </div>
          </div>

          {/* Categories */}
          <div className="mt-6">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Categories</h3>
            <div className="space-y-1">
              <div className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                <span className="text-sm">Social</span>
                <Badge variant="secondary" className="text-xs">972</Badge>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                <span className="text-sm">Updates</span>
                <Badge variant="secondary" className="text-xs">342</Badge>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                <span className="text-sm">Forums</span>
                <Badge variant="secondary" className="text-xs">128</Badge>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                <span className="text-sm">Shopping</span>
                <Badge variant="secondary" className="text-xs">8</Badge>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                <span className="text-sm">Promotions</span>
                <Badge variant="secondary" className="text-xs">21</Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Column - Email List */}
        <div className="w-80 border-r">
          <div className="p-4 border-b">
            <h2 className="text-lg font-semibold mb-3">Inbox</h2>
            <div className="flex space-x-2 mb-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input placeholder="Q Search" className="pl-10" />
              </div>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">All mail</Button>
              <Button variant="outline" size="sm">Unread</Button>
            </div>
          </div>

          <div className="overflow-y-auto h-[400px]">
            {/* Email 1 - Selected */}
            <div className="p-4 border-b bg-blue-50 hover:bg-blue-50 cursor-pointer">
              <div className="flex items-start space-x-3">
                <Avatar className="h-8 w-8">
                  <AvatarFallback>WS</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-sm">William Smith</span>
                    <span className="text-xs text-gray-500">over 1 year ago</span>
                  </div>
                  <div className="text-sm font-medium">Meeting Tomorrow</div>
                  <div className="text-sm text-gray-600 truncate">Hi, let's have a meeting tomorrow to discuss the project...</div>
                  <div className="flex space-x-1 mt-2">
                    <Badge variant="outline" className="text-xs">meeting</Badge>
                    <Badge variant="outline" className="text-xs">work</Badge>
                    <Badge variant="outline" className="text-xs">important</Badge>
                  </div>
                </div>
              </div>
            </div>

            {/* Email 2 */}
            <div className="p-4 border-b hover:bg-gray-50 cursor-pointer">
              <div className="flex items-start space-x-3">
                <Avatar className="h-8 w-8">
                  <AvatarFallback>AS</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-sm">Alice Smith</span>
                    <span className="text-xs text-gray-500">over 1 year ago</span>
                  </div>
                  <div className="text-sm font-medium">Re: Project Update</div>
                  <div className="text-sm text-gray-600 truncate">Thanks for the update. I'll review the changes...</div>
                  <div className="flex space-x-1 mt-2">
                    <Badge variant="outline" className="text-xs">work</Badge>
                    <Badge variant="outline" className="text-xs">important</Badge>
                  </div>
                </div>
              </div>
            </div>

            {/* Email 3 */}
            <div className="p-4 border-b hover:bg-gray-50 cursor-pointer">
              <div className="flex items-start space-x-3">
                <Avatar className="h-8 w-8">
                  <AvatarFallback>BJ</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-sm">Bob Johnson</span>
                    <span className="text-xs text-gray-500">almost 2 years ago</span>
                  </div>
                  <div className="text-sm font-medium">Weekend Plans</div>
                  <div className="text-sm text-gray-600 truncate">Hey! What are your plans for this weekend?</div>
                  <div className="flex space-x-1 mt-2">
                    <Badge variant="outline" className="text-xs">personal</Badge>
                  </div>
                </div>
              </div>
            </div>

            {/* Email 4 */}
            <div className="p-4 border-b hover:bg-gray-50 cursor-pointer">
              <div className="flex items-start space-x-3">
                <Avatar className="h-8 w-8">
                  <AvatarFallback>ED</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-sm">Emily Davis</span>
                    <span className="text-xs text-gray-500">almost 2 years ago</span>
                  </div>
                  <div className="text-sm font-medium">Re: Question about Budget</div>
                  <div className="text-sm text-gray-600 truncate">I have a question about the budget allocation...</div>
                  <div className="flex space-x-1 mt-2">
                    <Badge variant="outline" className="text-xs">work</Badge>
                    <Badge variant="outline" className="text-xs">budget</Badge>
                  </div>
                </div>
              </div>
            </div>

            {/* Email 5 */}
            <div className="p-4 border-b hover:bg-gray-50 cursor-pointer">
              <div className="flex items-start space-x-3">
                <Avatar className="h-8 w-8">
                  <AvatarFallback>MW</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-sm">Michael Wilson</span>
                    <span className="text-xs text-gray-500">almost 2 years ago</span>
                  </div>
                  <div className="text-sm font-medium">Team Meeting Notes</div>
                  <div className="text-sm text-gray-600 truncate">Here are the notes from our team meeting...</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Email Content */}
        <div className="flex-1 flex flex-col">
          {/* Toolbar */}
          <div className="p-4 border-b flex items-center space-x-2">
            <Button variant="ghost" size="sm">
              <Archive className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Trash2 className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Mail className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Clock className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Reply className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Forward className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>

          {/* Email Content */}
          <div className="flex-1 p-6 overflow-y-auto">
            <div className="mb-6">
              <h1 className="text-xl font-semibold mb-2">Meeting Tomorrow</h1>
              <div className="space-y-1 text-sm text-gray-600">
                <div><strong>From:</strong> William Smith</div>
                <div><strong>Reply-To:</strong> williamsmith@example.com</div>
                <div><strong>Date:</strong> Oct 22, 2023, 9:00:00 AM</div>
              </div>
            </div>

            <div className="prose max-w-none">
              <p className="text-gray-800 leading-relaxed">
                Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success. Please come prepared with any questions or insights you may have.
              </p>
              <p className="text-gray-800 leading-relaxed mt-4">
                Looking forward to our meeting!
              </p>
              <p className="text-gray-800 leading-relaxed mt-4">
                Best regards,<br />
                William
              </p>
            </div>
          </div>

          {/* Reply Area */}
          <div className="p-4 border-t bg-gray-50">
            <div className="flex items-center space-x-2">
              <Input placeholder="Reply William Smith..." className="flex-1" />
              <Button size="sm" className="bg-gray-600 hover:bg-gray-700">
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <div className="mt-2">
              <button className="text-sm text-gray-500 hover:text-gray-700">Mute this thread</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmailDashboard 