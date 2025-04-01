import { Component } from '@angular/core';

@Component({
  selector: 'app-voting',
  standalone: false,
  templateUrl: './voting.component.html',
  styleUrl: './voting.component.scss'
})
export class VotingComponent {
  activeTab: string = 'preview';

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  question = 'Which Linux command is used to find the location of an executable file?';

  options: any[] = [
    { id: '1', text: 'find', votes: 285, percentage: 58 },
    { id: '2', text: 'which', votes: 79, percentage: 16 },
    { id: '3', text: 'locate', votes: 89, percentage: 18 },
    { id: '4', text: 'grep', votes: 39, percentage: 8 }
  ];

  timeLeftText = '6d left';
  handleVote(voteData: { id: string, text: string, votes: number, percentage: number }): void {
    console.log('Vote received:', voteData);
    // Example: Send to backend or update state
//     alert(`Voted for ${voteData.text} (ID: ${voteData.id}) 
// Total votes: ${voteData.votes} (${voteData.percentage}%)`);
  }
}
