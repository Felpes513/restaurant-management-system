import { Component } from '@angular/core';
import { Navbar } from '../../shared/components/navbar/navbar';
import { Footer } from '../../shared/components/footer/footer';
import { Hero } from './sections/hero/hero';
import { About } from './sections/about/about';
import { Menu } from './sections/menu/menu';
import { Gallery } from './sections/gallery/gallery';
import { Contact } from './sections/contact/contact';

@Component({
  selector: 'app-home',
  imports: [Navbar, Footer, Hero, About, Menu, Gallery, Contact],
  templateUrl: './home.html',
})
export class Home {}
