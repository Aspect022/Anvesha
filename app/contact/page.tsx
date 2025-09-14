import { Navbar } from "@/components/layout/navbar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="font-heading font-bold text-4xl sm:text-5xl text-foreground mb-6">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Have questions about Anvesha? We'd love to hear from you. Get in touch with our team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="border minimal-shadow">
            <CardHeader>
              <CardTitle className="font-heading text-2xl">Send us a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">First Name</label>
                    <Input placeholder="Enter your first name" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Last Name</label>
                    <Input placeholder="Enter your last name" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                  <Input type="email" placeholder="Enter your email" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Subject</label>
                  <Input placeholder="What is this about?" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                  <Textarea placeholder="Tell us more about your inquiry..." rows={5} />
                </div>
                <Button className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border minimal-shadow">
              <CardHeader>
                <CardTitle className="font-heading text-2xl">Get in touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-muted-foreground">team@anvesha.edu</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <p className="text-muted-foreground">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Address</p>
                    <p className="text-muted-foreground">
                      Smart India Hackathon 2025
                      <br />
                      Innovation Hub, India
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border minimal-shadow">
              <CardHeader>
                <CardTitle className="font-heading text-xl">Quick Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  For immediate assistance with technical issues or account problems, please use our support portal.
                </p>
                <Button variant="outline" className="w-full bg-transparent">
                  Visit Support Portal
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
