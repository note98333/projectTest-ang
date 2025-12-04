import { Component } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";
import { MailboxIcon, FileStack, Plus, ChevronDown } from 'lucide-angular';

@Component({
  selector: 'app-navbar',
  imports: [LucideAngularModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  readonly MailBox = MailboxIcon;
  readonly FileStack = FileStack;
  readonly Plus = Plus;
  readonly ChevronDown = ChevronDown;

}
