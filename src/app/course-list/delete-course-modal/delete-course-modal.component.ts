import { Component, ViewEncapsulation, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
import { ModalService } from '../../modal/services/modal.service';
import { CoursesService } from '../../course-list/services/courses.service';
import { CourseListItem } from '../../models/course-list-item.model';

@Component({
  selector: 'app-delete-course-modal',
  templateUrl: './delete-course-modal.component.html',
  styleUrls: ['./delete-course-modal.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class DeleteCourseModalComponent implements OnInit, OnDestroy {

  @Input() id: string;

  @Input() courseInputForModal: CourseListItem;

  private element: any;

  constructor(private modalService: ModalService, private el: ElementRef, private coursesService: CoursesService) {
    this.element = el.nativeElement;
  }

  ngOnInit(): void {
    if (!this.id) {
      console.error('modal must have an id');
      return;
    }
    document.body.appendChild(this.element);
    this.element.addEventListener('click', el => {
      if (el.target.className === 'modal-background') {
        this.close();
      }
    });
    this.modalService.add(this);
  }

  ngOnDestroy(): void {
    this.modalService.remove(this.id);
    this.element.remove();
  }

  open(): void {
    this.element.style.display = 'block';
    document.body.classList.add('modal-open');
  }

  close(): void {
    this.element.style.display = 'none';
    document.body.classList.remove('modal-open');
  }

  // deleteCourse(courseListItem: CourseListItem) {
  //   console.log('calling delete course from modal component');
  //   this.coursesService.removeItem(courseListItem).subscribe();
  // }

  deleteCourse() {
    console.log('calling delete course from modal component - ' + this.courseInputForModal.id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

}
